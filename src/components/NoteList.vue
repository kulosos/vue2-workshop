<template>
  <div class="note-list">
      Note List
      <i class="fas fa-coffee"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NoteList extends Vue {}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-list {
  border-right: 1px $bg_dark solid;
  background-color: $bg_lightgray;
  display: flex;
  flex-direction: row;
}
</style>