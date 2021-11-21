<template>
  <div class="note-list">
    <button
      v-for="note in notes"
      :key="note.id"
      class="note-list__item"
      type="button"
    >
      <i class="fas fa-file note-list__item-icon"></i>
      <span>{{ note.title }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Note } from "@/models/Note";
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NoteList extends Vue {
  @Prop({ required: true, type: Array as PropType<Note[]> })
  public notes!: Note[];
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-list {
  border-right: 1px $bg_dark solid;
  background-color: $bg_lightgray;
  display: flex;
  flex-direction: column;

  &__item {
    background-color: $ws-white;
    border: 0;
    border-bottom: 1px $bg_dark solid;
    display: flex;
    padding: $spaceSM;
    text-align: left;
    transition: 0.15s background-color;

    &:hover {
      background-color: $bg_lightgray;
      cursor: pointer;
    }

     &:hover > .note-list__item-icon {
      color: #1C7CE0;
    }

    &-icon {
      margin-right: $spaceS;
    }
  }
}
</style>