<template>
  <div class="app">
    <Header class="app__header"></Header>
    <main class="app__main">
      <NoteList class="app__note-list"></NoteList>
      <NoteDetail class="app__note-detail"></NoteDetail>
    </main>
    <Footer class="app__footer"></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import NoteDetail from "./components/NoteDetail.vue";
import NoteList from "./components/NoteList.vue";

@Component({
  components: {
    Header,
    NoteList,
    NoteDetail,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
@import '../src/styles/spaces';
@import '../src/styles/colors';

$headerHeight: 30px;
$footerHeight: 24px;

@mixin boxContentLayout {
    padding: $spaceM;
    width: calc(100% - ($spaceM*2));
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;

  &__header {
    @include boxContentLayout;
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
    display: flex;
    align-items: center;
    height: $footerHeight;
  }
}
</style>

