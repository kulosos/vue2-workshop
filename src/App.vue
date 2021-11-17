<template>
  <div>
    <router-view>
      <!-- component contents depending on current route -->
    </router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class App extends Vue {
}
</script>

<style scoped lang="scss">

@import '../src/styles/spaces';
@import '../src/styles/constants';

.app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>

