<template>
  <div class="home">
    <div class="home__header">App Header</div>
    <div class="home__note-list">Note List</div>
    <div class="home__note-detail">Note Detail</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
@import '/src/styles/colors';


.home {
  background-color: $ws-blue;
  display: flex;
  flex-direction: column;

  &__note-list {

  }

  &__note-detail {

  }

}

</style>

