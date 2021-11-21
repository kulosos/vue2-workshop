<template>
  <div class="note">
    <NoteList
      class="note__list"
      :notes="notes"
      @selected-note="setSelectedNote"
    ></NoteList>
    <NoteDetail :note="selectedNote" class="note__detail"></NoteDetail>
  </div>
</template>

<script lang="ts">
import { Note } from "@/models/Note";
import { NotesService } from "@/services/NotesService";
import { Component, Vue } from "vue-property-decorator";
import NoteDetail from "./NoteDetail.vue";
import NoteList from "./NoteList.vue";

@Component({
  components: {
    NoteList,
    NoteDetail,
  },
})
export default class NoteView extends Vue {
  public notes: Note[] = [];
  public selectedNote: Note = {} as Note;

  public mounted(): void {
    this.getNotes();
  }

  public getNotes(): void {
    /* const amount = Number(this.$route.params.noteId); */
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

  public setSelectedNote(note: Note): void {
    this.selectedNote = note;
  }
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note {
  display: flex;
  flex-direction: row;

  &__list {
    border-right: 1px $bg_dark solid;
    display: flex;
    max-width: 350px;
    min-width: 200px;
    width: 20%;
  }

  &__detail {
    display: flex;
    width: 80%;
  }
}
</style>