<template>
  <div class="home">
    <NoteListLayout v-if="$store.getters.isListLayout"></NoteListLayout>
    <NoteGridLayout v-else></NoteGridLayout>
  </div>
</template>

<script lang="ts">
import NoteGridLayout from "@/components/NoteGridLayout.vue";
import NoteListLayout from "@/components/NoteListLayout.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    NoteListLayout,
    NoteGridLayout,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../src/styles/spaces";

.home {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>

