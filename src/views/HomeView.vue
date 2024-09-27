<script>
import HeroSection from "@/components/HeroSection.vue";
import InitativesSection from "@/components/InitativesSection.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";
import ContactUsSection from "@/components/ContactUsSection.vue";
export default {
  name: "HomeView",
  components: {ContactUsSection, AboutUsSection, InitativesSection, HeroSection},
}
</script>

<template>
  <main>
    <hero-section></hero-section>
    <initatives-section></initatives-section>
    <about-us-section></about-us-section>
    <contact-us-section></contact-us-section>
  </main>
</template>

<style>

</style>