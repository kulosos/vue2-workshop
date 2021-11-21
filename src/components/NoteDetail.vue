<template>
  <div class="note-detail">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NoteDetail extends Vue {}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-detail {
  border-right: 1px $bg_dark solid;
  background-color: $ws-white;
  display: flex;
  flex-direction: row;
}
</style>