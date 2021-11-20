<template>
  <div>
    <span>App Header</span>
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Header extends Vue {}
</script>
