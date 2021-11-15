<template>
  <div class="account">
    <div class="form-wrap">
      <a-form :form="form"
              ref="ruleForm">

        <a-form-item>
          <label>用户名</label>
          <a-input type="text"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password"
                   autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary"
                    html-type="submit"
                    block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <dir class="fs-12 text-center">
        <a href=""
           class="color-white"
           @click="set()">忘记密码</a> |

        <router-link to="/register">注册</router-link>
      </dir>
      {{count}}
    </div>
  </div>
</template>
<script>

//输入
import { onMounted, reactive, toRefs, ref } from 'vue'
export default {

  name: "Login",

  //vue2.0写法
  // data () {
  //   return {
  //     layout: {
  //       labelCol: { span: 6 },
  //       wrapperCol: { span: 14 },
  //     }
  //   }
  // },

  components: {},

  //vue3.0写法
  setup () {

    const number = ref(10);    //定义基础数据类型：number、string、boolear、null、undefault、symbol
    console.log(number.value);

    //类似于json对象的语法
    const formConfig = reactive({
      layout: {
        labelCol: { span: 15 },
        wrapperCol: { span: 14 },
      }
    })

    //vue3.0多了一步转换
    const data = toRefs(formConfig);
    onMounted(() => { })

    //输出
    return {
      ...data,
    }
  }
}
</script>
<style scoped lang='scss'>
@import './style.scss';
</style>