<template>
  <div class="note-grid-layout">
    GRID Layout
 <!--    <NoteList
      class="note__list"
      :class="[
        {
          'note__list--light': !$store.getters.isDarkMode,
          'note__list--dark': $store.getters.isDarkMode,
        },
      ]"
      :notes="notes"
      @selected-note="setSelectedNote"
    ></NoteList>
    <NoteDetail :note="selectedNote" class="note__detail"></NoteDetail> -->
  </div>
</template>

<script lang="ts">
import { AppRouteNames } from "@/models/AppRouteNames";
import { Note } from "@/models/Note";
import { NotesService } from "@/services/NotesService";
import { Component, Vue, Watch } from "vue-property-decorator";
import NoteDetail from "./NoteDetail.vue";
import NoteList from "./NoteList.vue";

@Component({
  components: {
    NoteList,
    NoteDetail,
  },
})
export default class NoteGridLayout extends Vue {
  public notes: Note[] = [];
  public selectedNote: Note = {} as Note;

  public mounted(): void {
    this.getNotes();
  }

  public getNotes(): void {
    /* const amount = Number(this.$route.params.noteId); */
    NotesService.getNotes()
      .then((result: Note[]) => {
        this.notes = result;
        this.loadNoteFromRoute();
      })
      .catch(() => {
        console.log("error catched while retrieving notes data");
      });
  }

  @Watch("$route", { immediate: true })
  public loadNoteFromRoute(): void {
    const noteId = this.$route.params.noteId;
    if (noteId) {
      const foundNote = this.notes.find((note) => note.id === noteId);
      this.selectedNote = foundNote ? foundNote : this.selectedNote;
    }
  }

  public setSelectedNote(note: Note): void {
    this.selectedNote = note;
    this.$router.push({ path: `/${AppRouteNames.Note}/${note.id}` });
  }
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-grid-layout {
  display: flex;
  flex-direction: row;
  width: 100%;

  &__list {
    display: flex;
    max-width: 350px;
    min-width: 200px;
    width: 20%;

    &--light {
      border-right: 1px $bg_dark solid;
    }

    &--dark {
      border-right: 1px $ws-border-dark solid;
    }
  }

  &__detail {
    display: flex;
    width: 80%;
  }
}
</style>