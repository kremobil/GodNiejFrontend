<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationHeader from "@/components/NavigationHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

<template>
  <NavigationHeader></NavigationHeader>

  <RouterView />

  <FooterSection></FooterSection>
</template>

<style scoped>

</style>
