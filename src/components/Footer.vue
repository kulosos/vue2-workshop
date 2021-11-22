<template>
  <div
    class="footer"
    :class="[
      {
        'footer--light': !$store.getters.isDarkMode,
        'footer--dark': $store.getters.isDarkMode,
      },
    ]"
  >
    <span
      >Notes App &middot; Vue Workshop 2021 &middot; Oliver Kulas &middot;
      DB-Vertrieb P.DLV22(1)</span
    >
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
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.footer {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: smaller;
  justify-content: center;
  padding: 0 $spaceSM;

  &--light {
    background-color: $bg_lightgray;
    border-top: 1px $bg_dark solid;
  }

  &--dark {
    background-color: $ws-bg-dark-quaternary;
    border-top: 1px $ws-border-dark solid;
    color: $ws-font-dark-secondary;
    color: $ws-font-dark-tertiary;
  }
}
</style>