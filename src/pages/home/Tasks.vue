<template>
  <div>
    <filters></filters>
    <sorter></sorter>
    <hr/>
    <selection></selection>
    <div class="container is-fluid">
      <card></card>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Filters from './tasks/Filters.vue';
import Sorter from './tasks/Sorter.vue';
import Selection from './tasks/Selection.vue';
import Card from './tasks/Card.vue';

@Component({
  components: {
    filters: Filters,
    sorter: Sorter,
    selection: Selection,
    card: Card
  }
})
export default class Tasks extends Vue {
}
</script>
