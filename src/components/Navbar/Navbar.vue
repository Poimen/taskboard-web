<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      BRAND

      <a role="button" class="navbar-burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          START MENU SIDE
          <button class="button is-medium" @click="snackbar">
            Launch snackbar (default)
          </button>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          END MENU SITE
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  snackbar() {
    this.$snackbar.open(`Default, positioned bottom-right with a green 'OK' button`);
  }
}
</script>
