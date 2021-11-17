<template>
  <div id="header">
    <div class="header-menu">

      <a-dropdown>
        <a class="ant-dropdown-link"
           @click="e => e.preventDefault()">
          <img src="@/assets/123.jpg"
               alt=""
               class="header-img">
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <div class="menu-item">13629945629</div>

            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <div class="menu-item">
                <span>中文</span> |
                <span>英文</span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <router-link to="/"
                           style="color:black">退出</router-link>

            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script>


export default {

}
</script>
<style scoped lang='scss'>
#header {
  padding: 0 20px;
  height: 64px;
}
.header-menu {
  float: right;
}
.header-img {
  width: 20px;
  height: 30px;
}
</style>