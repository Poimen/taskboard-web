<template>
  <section>
    <section class="navbar-container">
      <navbar></navbar>
    </section>
    <section class="content-container">
      <section class="side-bar-container"></section>
      <section class="main-content-container"></section>
    </section>
  </section>
</template>

<style lang="scss" scoped>

</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/Navbar/Navbar.vue';

@Component({
  components: {
    navbar: NavBar
  }
})
export default class Home extends Vue {
}
</script>

