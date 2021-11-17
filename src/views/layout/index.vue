<template>
  <div>
    <a-layout id="layout-main">
      <a-layout-sider v-model="collapsed"
                      :trigger="null"
                      collapsible>
        <LayoutAside />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <LayoutHeader />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <LayoutMain />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>

</template>
<script>
import { reactive, toRefs } from 'vue';
import LayoutAside from './Aside.vue';
import LayoutHeader from './Header.vue';
import LayoutMain from './Main.vue';
export default {
  components: {
    LayoutAside,
    LayoutHeader,
    LayoutMain
  },
  setup (props) {
    const data = reactive({
      selectedKeys: ['1'],
      collapsed: false,
    })

    return {
      ...data
    }
  }
}
</script>
<style  lang='scss'>
#layout-main{
  height: 100vh;
}
</style>