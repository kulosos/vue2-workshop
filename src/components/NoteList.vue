<template>
  <div
    class="note-list"
    :class="[
      {
        'note-list--light': !$store.getters.isDarkMode,
        'note-list--dark': $store.getters.isDarkMode,
      },
    ]"
  >
    <button
      v-for="note in notes"
      :key="note.id"
      class="note-list__item"
      :class="[
        {
          'note-list__item--light': !$store.getters.isDarkMode,
          'note-list__item--dark': $store.getters.isDarkMode,
        },
      ]"
      type="button"
      @click="emitSelectedNote(note)"
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

  public emitSelectedNote(note: Note): void {
    this.$emit("selected-note", note);
  }
}
</script>

<style scoped lang="scss">
@import "../../src/styles/spaces";
@import "../../src/styles/colors";

.note-list {
  /* border-right: 1px $bg_dark solid; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100%;

  &--light {
    background-color: $bg_lightgray;
  }

  &--dark {
    background-color: $bg_dark;
  }

  &__item {
    align-items: center;
    border: 0;
    display: flex;
    padding: $spaceSM;
    text-align: left;
    transition: 0.15s background-color;

    &:hover {
      cursor: pointer;
    }

    &--light {
      background-color: $ws-white;
      border-bottom: 1px $bg_dark solid;

      &:hover {
        background-color: $bg_lightgray;
      }
    }

    &--dark {
      background-color: $ws-border-dark;
      border-bottom: 1px $ws-bg-dark-seconday solid;
      color: $ws-font-dark-secondary;

      &:hover {
        background-color: $ws-bg-dark-primary;
      }
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