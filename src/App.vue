<template>
  <div class="app">
    <Header class="app__header"></Header>
    <div class="app__main">
      <router-view></router-view>
    </div>
    <Footer class="app__footer"></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {
  public mounted(): void {
      console.log('darkMode Cookie: ', this.$cookies.get('darkMode'));
  }
}
</script>

<style scoped lang="scss">
@import "../src/styles/base";
@import "../src/styles/spaces";
@import "../src/styles/colors";

@mixin boxContentLayout {
  width: calc(100% - (#{$spaceM} * 2));
}

.app {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    @include boxContentLayout;
    height: $headerHeight;
  }

  &__main {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto;
    width: 100%;
  }

  &__footer {
    padding-top: $spaceXXS;
    padding-bottom: $spaceXXS;
    display: flex;
    align-items: center;
    height: $footerHeight;
  }
}
</style>

