<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation"
              :model="account_form"
              :rules="rules_form"
              ref="ruleForm"
              @finish="handleFinish">

        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username"
                   type="text"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model:value="account_form.password"
                   type="password"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="account_form.passwords"
                   type="password"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item name=code>
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input maxlength="6"
                       v-model:value="account_form.code"
                       type="text"
                       utocomplete="off" />
            </a-col>
            <a-col :span="10">
              <a-button @click="getCode"
                        block
                        :disabled="button_disabled"
                        :loading="button_loading">{{button_text}}</a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary"
                    html-type="submit"
                    block>
            注册
          </a-button>
        </a-form-item>
      </a-form>
      <router-link to="/"
                   class="color-white">登录</router-link> |
      <router-link to="/forget"
                   class="color-white">忘记密码</router-link>
    </div>
  </div>
</template>

<script>

//导入验证类的方法
import { checkPhone, checkPassword, checkCode } from '@/utils/check'
//输入
import { onMounted, reactive, toRefs } from 'vue'
export default {
  components: {},
  //vue3.0写法
  setup () {

    const checkUsername = async (rule, value) => {
      if (!value) {
        return Promise.reject('请输入用户名');  //不存在的情况
      } else if (!checkPhone(value)) {
        return Promise.reject('请输入11位数字手机号');  //手机号错误的情况
      } else {
        return Promise.resolve();
      }
    };

    //校验密码
    const checkpassword = async (rule, value) => {
      const passwords = formConfig.account_form.passwords
      if (!value) {
        return Promise.reject('请输入密码');
      } else if (!checkPassword(value)) {
        return Promise.reject('请输入正确密码');
      } else if (passwords && value) {
        if (passwords != value) {   //必须两个密码都存在的时候才通过
          return Promise.reject('两次密码不一样')
        }
      }
      else {
        return Promise.resolve();
      }
    };

    //校验再次确认密码
    const checkpasswords = async (rule, value) => {

      if (!value) {
        return Promise.reject('请再次输入密码');
      } else if (!checkPassword(value)) {
        return Promise.reject('请输入正确密码');
      }
      else {
        return Promise.resolve();
      }
    };

    //验证码
    const checkcode = async (rule, value) => {

      if (!value) {
        return Promise.reject('请输入验证码');
      } else if (!checkCode(value)) {
        return Promise.reject('请输入6位的数字+英文');
      }
      else {
        return Promise.resolve();
      }
    };

    //类似于json对象的语法
    const formConfig = reactive({
      layout: {
        labelCol: { span: 15 },
        wrapperCol: { span: 14 },
      },
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: ""
      },
      rules_form: {
        username: [{
          validator: checkUsername, trigger: 'change'
        }],
        password: [{
          validator: checkpassword, trigger: 'change'
        }],
        passwords: [{
          validator: checkpasswords, trigger: 'change'
        }],
        code: [{
          validator: checkcode, trigger: 'change'
        }],
      },
    })

    const dataItem = reactive({
      //获取验证码按钮
      button_text: "获取验证码",
      button_loading: false,
      button_disabled: false,
      sec: 60,
      //定时器
      timer: null
    })
    //vue3.0多了一步转换
    const form = toRefs(formConfig);
    const data = toRefs(dataItem);
    onMounted(() => { })

    //提交表单
    const handleFinish = () => {
      alert(111)
    }

    //获取验证码
    const getCode = () => {
      //优先判断定时器是否存在，存在则先清除后再开定时器
      if (dataItem.timer) { clearInterval(dataItem.timer); }
      //开启定时器
      dataItem.timer = setInterval(() => {
        const s = dataItem.sec--;
        dataItem.button_text = `${s}秒`;
        if (s <= 0) {
          clearInterval(dataItem.timer);
          dataItem.button_text = `重新获取`;
        }
      }, 1000)
    }


    //输出
    return {
      ...form,
      ...data,
      handleFinish,
      getCode
    }
  }
}
</script>
<style scoped lang='scss'>
@import './style.scss';
</style>