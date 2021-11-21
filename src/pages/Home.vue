<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Home extends Vue {
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

