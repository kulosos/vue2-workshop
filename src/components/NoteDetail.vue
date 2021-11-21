<template>
  <div class="note-detail">
    <p>{{ note.id }}</p>
    <h2>{{ note.title }}</h2>
    <p>{{ note.content }}</p>
    <p>CreatedAt: {{ note.createdAt }}</p>
    <p>Last Modified: {{ note.lastModified }}</p>
    <p>Tags: {{ note.tags }}</p>
  </div>
</template>

<script lang="ts">
import { Note } from "@/models/Note";
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NoteDetail extends Vue {

  @Prop({ required: true, type: Object as PropType<Note> })
  public note!: Note;

  public get text(): string {
    return this.$route.params.noteId;
  }
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-detail {
  background-color: $ws-white;
  display: flex;
  flex-direction: column;
  padding: $spaceL;
}
</style>