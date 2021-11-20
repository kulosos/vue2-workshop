<template>
  <div class="home">
    <h1>Page Home.vue</h1>
    <a href="#">This is a link</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public mounted(): void {
    console.log("HomePage mounted");
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
.home {
  display: flex;
  flex-direction: column;
}
</style>

