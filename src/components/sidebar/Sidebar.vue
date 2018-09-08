<template>
  <aside class="menu">
    <ul class="menu-list" v-for="section in menus" :key="section.id">
      <!-- <p class="menu-label">
        {{section.name}}
      </p> -->
      <ul class="menu-list">
        <li v-for="item in section.items" :key="item.id">
          <b-tooltip :label="item.tooltip" position="is-right">
            <router-link :to="{ name: item.routeTo }">
              <span class="icon on-left"><i :class="item.icon"></i></span>
              {{item.name}}
            </router-link>
          </b-tooltip>
        </li>
      </ul>
    </ul>
    <!-- <ul class="menu-list">
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
    </ul> -->
  </aside>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, namespace } from 'vuex-class';
import { MenuSection } from '@/components/sidebar/store/models';

const menuStore = namespace('sidebarState');

@Component
export default class Sidebar extends Vue {
  @menuStore.Getter('menus') sidebarMenus!: MenuSection[];

  get menus(): MenuSection[] {
    return this.sidebarMenus;
  }
}
</script>
