<template>
  <div class="footer">
    <span>Notes App &middot; Vue Workshop 2021 &middot; Oliver Kulas &middot; DB-Vertrieb P.DLV22(1)</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import '../../src/styles/spaces';
@import '../../src/styles/colors';

.footer {
  align-items: center;
  background-color: $bg_lightgray;
  border-top: 1px $bg_dark solid;
  display: flex;
  flex-direction: row;
  font-size: smaller;
  justify-content: center;
  padding: 0 $spaceSM;
}
</style>