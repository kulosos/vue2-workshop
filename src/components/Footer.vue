<template>
  <div class="footer">
    <span>Footer</span>
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
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
}
</style>