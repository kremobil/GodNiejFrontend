<script>
import HighlightedSlider from "@/components/HighlightedSlider.vue";
import AllInitiatives from "@/components/AllInitiatives.vue";

export default {
  name: "InitiativesView",
  components: {AllInitiatives, HighlightedSlider}
}
</script>

<template>
<div class="initiatives-wrapper">
  <highlighted-slider />
  <all-initiatives />
</div>
</template>

<style scoped>
.initiatives-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 80px - 2rem);
  margin-top: calc(80px + 2rem);
}
@media screen and (max-width: 512px) {
  .initiatives-wrapper {
    margin-top: 0;
  }
}
</style>