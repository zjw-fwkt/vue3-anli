<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation"
              :model="account_form"
              :rules="rules_form"
              ref="ruleForm"
              @finish="handleFinish">

        <a-form-item name="uname">
          <label>用户名</label>
          <a-input v-model="account_form.username"
                   type="text"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input v-model="account_form.password"
                   type="password"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>确认密码</label>
          <a-input v-model="account_form.passwords"
                   type="password"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="14">
              <a-input v-model="account_form.code"
                       type="text"
                       utocomplete="off" />
            </a-col>
            <a-col :span="10">
              <a-button block
                        class="height:26px">获取验证码</a-button>
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
    </div>
  </div>
</template>
<script>

//输入
import { onMounted, reactive, toRefs } from 'vue'
export default {
  components: {},
  //vue3.0写法
  setup () {

    const checkUsername = async (rule, value) => {
      let regPhong = /^1[3456789]\d{9}$/;    //13    713746864,    133,13    d代表数字
      console.log(regPhong.test(value));
      if (!value) {
        return Promise.reject('请输入用户名');  //不存在的情况
      } else if (!regPhong.test(value)) {
        return Promise.reject('请输入11位数字手机号');  //手机号错误的情况
      } else {
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
        uname: [{
          validator: checkUsername, trigger: 'change'
        }

        ]
      }
    })

    //vue3.0多了一步转换
    const data = toRefs(formConfig);
    onMounted(() => { })

    //提交表单
    const handleFinish = () => {
      alert(111)

    }


    //输出
    return {
      ...data,
      handleFinish
    }
  }
}
</script>
<style scoped lang='scss'>
@import './style.scss';
</style>