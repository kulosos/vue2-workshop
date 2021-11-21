<template>
  <div class="app">
    <Header class="app__header"></Header>
    <main class="app__main">
      <NoteList class="app__note-list" :notes="notes"></NoteList>
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
    NotesService.getNotes()
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
@import "../src/styles/spaces";
@import "../src/styles/colors";

$headerHeight: 30px;
$footerHeight: 24px;

@mixin boxContentLayout {
  width: calc(100% - ($spaceM * 2));
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

