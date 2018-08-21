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
.navbar-container {
  background-color: lightcyan;
}

.side-bar-container {
  background-color: lightgray;
}

.main-content-container {
  background: whitesmoke;
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

