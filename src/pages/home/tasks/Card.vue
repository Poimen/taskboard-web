<template>
  <div>
    <div class="columns">
      <div class="column is-narrow">
        <div class="field">
          <b-checkbox></b-checkbox>
        </div>
      </div>
      <div class="column">
          <tagline></tagline>
        <div>
          <p>Title</p>
        </div>
        <div>
          ASSIGNEE | DUE DATE
        </div>
      </div>
      <div class="column is-narrow is-2">
        <div>
          PRIORITY
        </div>
        <div>
          STATUS
        </div>
        <div>
          CLIENT
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TageLine from './TagLine.vue';

@Component({
  components: {
    tagline: TageLine
  }
})
export default class Card extends Vue {
}
</script>
