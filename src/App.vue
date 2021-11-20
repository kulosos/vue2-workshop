<template>
  <div class="app">
    <header class="app__header">App Header</header>
    <main class="app__main">
      <div class="app__note-list">Note List</div>
      <div class="app__note-detail">
        <router-view></router-view>
      </div>
    </main>
    <footer class="app__footer">Footer</footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
@import "../src/styles/spaces";
@import "../src/styles/colors";

$headerHeight: 40px;
$footerHeight: 24px;

@mixin boxContentLayout {
    padding: $spaceM;
    width: calc(100% - ($spaceM*2));
}

.app {
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 100%;

  &__header {
    @include boxContentLayout;
    background-color: $ws-midnightblue-dark;
    align-items: center;
    display: flex;
    height: $headerHeight;
  }

  &__main {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  &__note-list {
    @include boxContentLayout;
    border-right: 1px $bg_lightgray solid;
    display: flex;
    max-width: 350px;
    min-width: 200px;
    width: 20%;
  }

  &__note-detail {
    @include boxContentLayout;
    display: flex;
    width: 80%;
  }

  &__footer {
    @include boxContentLayout;
    padding-top: $spaceXXS;
    padding-bottom: $spaceXXS;
    background: gray;
    display: flex;
    align-items: center;
    height: $footerHeight;
  }
}
</style>

