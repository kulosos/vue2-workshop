<template>
  <div
    class="note-detail"
    :class="[
      {
        'note-detail--light': !$store.getters.isDarkMode,
        'note-detail--dark': $store.getters.isDarkMode,
      },
    ]"
  >
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
  display: flex;
  flex-direction: column;
  padding: $spaceL;
  overflow: auto;

  &--light {
    background-color: $ws-white;
  }

  &--dark {
    background-color: $ws-bg-dark-primary;
    color: $ws-font-dark-secondary;
  }
}
</style>