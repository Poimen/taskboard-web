<template>
  <section class="container is-fluid">
    <section>
      <nav class="level dashboard-summary-items">
        <div class="level-item summary-item">
          <div class="summary">
            <p class="title">25</p>
            <p class="heading">Total Tickets</p>
          </div>
        </div>
        <div class="level-item summary-item">
          <div class="summary">
            <p class="title">123</p>
            <p class="heading">Overdue</p>
          </div>
        </div>
        <div class="level-item summary-item">
          <div class="summary">
            <p class="title">456K</p>
            <p class="heading">Due Today</p>
          </div>
        </div>
        <div class="level-item summary-item">
          <div class="summary">
            <p class="title">789</p>
            <p class="heading">Open</p>
          </div>
        </div>
        <div class="level-item summary-item">
          <div class="summary">
            <p class="title">789</p>
            <p class="heading">On Hold</p>
          </div>
        </div>
        <div class="level-item summary-item">
          <div class="summary">
            <p class="title">789</p>
            <p class="heading">Unassigned</p>
          </div>
        </div>
      </nav>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.level.dashboard-summary-items {
  .summary-item {
    border-left: 4px solid green;
    flex-grow: 0.03;

    .title {
      font-weight: 400;
    }

    .summary {
      margin: 12px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {
}
</script>

