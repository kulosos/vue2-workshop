<template>
  <div class="app">
    <div class="app__content">
      <Header class="app__header"></Header>
      <div class="app__main">
        <NoteList class="app__note-list" :notes="notes"></NoteList>
        <router-view></router-view>
      </div>
    </div>
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
import { Note } from "./models/Note";
import { NotesService } from "./services/NotesService";

@Component({
  components: {
    Header,
    NoteList,
    NoteDetail,
    Footer,
  },
})
export default class App extends Vue {
  public notes: Note[] = [];

  public mounted(): void {
    this.getNotes();
  }

  public getNotes(): void {
    const amount = Number(this.$route.params.noteId);
    NotesService.getNotes(amount)
      .then((result: Note[]) => {
        console.log("res -> ", result);
        this.notes = result;
      })
      .catch(() => {
        console.log("error catched while retrieving notes data");
      })
      .finally(() => {
        console.log("finally");
      });
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

  &__content {
    /* height: calc(100vh - #{67px} - #{$footerHeight}); */
  }

  &__main {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto;
    width: 100%;
  }

  &__note-list {
    border-right: 1px $bg_dark solid;
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
    padding-top: $spaceXXS;
    padding-bottom: $spaceXXS;
    display: flex;
    align-items: center;
    height: $footerHeight;
  }
}
</style>

