<template>
  <section>
    <navbar class="navbar-container"></navbar>
    <section class="content-container">
      <sidebar class="side-bar-container"></sidebar>
      <section class="main-content-container">
        <router-view></router-view>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "../styles/variables/variables";

.navbar-container {
  background-color: lightcyan;
}

.content-container {
  height: 100%;
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
  // background: whitesmoke;
  height: 100%;
  // margin: 25px;
  margin-left: $aside-bar-width + $main-content-margin-offset;
  margin-top: $main-content-margin-offset;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/Navbar/Navbar.vue';
import SideBar from '@/components/Sidebar/Sidebar.vue';

@Component({
  components: {
    navbar: NavBar,
    sidebar: SideBar
  }
})
export default class Home extends Vue {
}
</script>

