<template>
  <div>
    <navbar class="navbar-container"></navbar>
    <div class="content-container">
      <sidebar class="side-bar-container"></sidebar>
      <div class="main-content-container">
        <contextbar class="main-content-context-bar-container"></contextbar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables/variables";

.navbar-container {
  background-color: lightcyan;
}

.content-container {
  height: 100%;
  margin-left: $aside-bar-width + $main-content-margin-offset;
  // margin-top: $main-content-margin-offset;
  background-color: aquamarine;
}

.side-bar-container {
  background-color: olivedrab;
  height: 100%;
  position: fixed;
  right: 0px;
  left: 0px;
  top: $navbar-height;
  width: $aside-bar-width;
}

.main-content-container {
  background: whitesmoke;
  height: 100%;
  // margin: 25px;
}

.main-content-context-bar-container {
  height: 31px;
  background-color: beige;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/navbar/Navbar.vue';
import SideBar from '@/components/sidebar/Sidebar.vue';
import ContextBar from '@/components/navbar/Contextbar.vue';

@Component({
  components: {
    navbar: NavBar,
    sidebar: SideBar,
    contextbar: ContextBar
  }
})
export default class Home extends Vue {
}
</script>

