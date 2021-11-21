<template>
  <div class="header">
    <h2>Notes</h2>
    <div>
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.header {
  align-items: center;
  background-color: $ws-blue-mid;
  color: $ws-white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: $spaceM;
}
</style>