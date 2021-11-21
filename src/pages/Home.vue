<template>
  <div class="home">
    home
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
@import "../../src/styles/spaces";

.home {
  display: flex;
  flex-direction: column;
  padding: $spaceM;
}
</style>

