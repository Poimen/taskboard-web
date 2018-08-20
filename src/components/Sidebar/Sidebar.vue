<template>
  <aside class="menu">
    <ul class="menu-list">
      <li><a>Dashboard</a></li>
    </ul>
    <p class="menu-label">
      Boards
    </p>
    <ul class="menu-list">
      <li><a>Tasks</a></li>
      <li><a>Clients</a></li>
      <li><a>Calendar</a></li>
      <li><a>Day</a></li>
    </ul>
    <p class="menu-label">
      Knowledge
    </p>
    <ul class="menu-list">
      <li><a>Knowledge Board</a></li>
      <li><a>Reports</a></li>
    </ul>
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a>Chat</a></li>
      <li><a>Notifications</a></li>
      <li><a>Administration</a></li>
      <li><a>User</a></li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
}
</script>
