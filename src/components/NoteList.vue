<template>
  <div class="note-list">
    <button
      v-for="note in notes"
      :key="note.id"
      class="note-list__item"
      type="button"
    >
      <i class="far fa-file note-list__item-icon"></i>
      <div class="note-list__item-label">
        <span class="note-list__title"> {{ note.title }}</span>
        <span class="note-list__subtitle"> {{ note.lastModified }}</span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { Note } from "@/models/Note";
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { format as dateFnsFormat } from "date-fns";

@Component({
  components: {},
})
export default class NoteList extends Vue {
  @Prop({ required: true, type: Array as PropType<Note[]> })
  public notes!: Note[];

  public getFormattedDate(timestamp: string): string {
    return dateFnsFormat(new Date(timestamp), "dd.MM.yyyy HH:ss");
  }
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-list {
  /* border-right: 1px $bg_dark solid; */
  background-color: $bg_lightgray;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100%;

  &__item {
    align-items: center;
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

    &:hover .note-list__item-icon,
    &:hover .note-list__item-label {
      color: #1c7ce0;
    }

    &-icon {
      font-size: large;
      margin-right: $spaceS;
    }
  }

  &__item-label {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: larger;
  }

  &__subtitle {
    color: $font-color-light;
    font-size: smaller;
  }
}
</style>