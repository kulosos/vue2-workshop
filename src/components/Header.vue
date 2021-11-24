<template>
  <div
    class="header"
    :class="[
      {
        'header--light': !$store.getters.isDarkMode,
        'header--dark': $store.getters.isDarkMode,
      },
    ]"
  >
    <h2>Notes</h2>
    <div class="header__controls">
      <button
        v-if="$store.getters.isDarkMode"
        type="button"
        class="header__controls--dark-mode"
        title="Toggle Dark Mode"
        @click="toggleDarkMode"
      >
        <i class="fas fa-moon"></i>
      </button>
      <button
        v-else
        class="header__controls--dark-mode"
        title="Toggle Light Mode"
        @click="toggleDarkMode"
      >
        <i class="fas fa-sun"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {

  public toggleDarkMode(): void {
    // set vuex store value
    this.$store.commit("toggleDarkMode");
  }
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: $spaceM;

  &--light {
    background-color: $ws-blue-mid;
    color: $ws-white;
  }

  &--dark {
    background-color: $ws-bg-dark-quaternary;
    color: $ws-font-dark-secondary;
  }

  &__controls > button {
    background: none;
    border: 1px transparent solid;
    margin: 0 $spaceS;
    padding: $spaceS;

    & > i {
      color: $ws-white;
      font-size: large;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover > i {
      color: $bg_light-50;
    }
  }
}
</style>