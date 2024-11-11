<script>
import MainLink from "@/components/MainLink.vue";

export default {
  name: "OurPatronessView",
  components: {MainLink}
}
</script>

<template>
<div class="our-patroness-wrapper">
  <div class="redirect-card">
    <h1>Zapraszamy niebawem 😊</h1>
    <h2>Wciąż pracujemy nad tą zakładką by dostarczyć ci jak najlepszej jakości treści.</h2>
    <MainLink to="/" secondary>Powrót na stronę główną</MainLink>
    <!-- #TODO: Finish patroness page-->
  </div>
</div>
</template>

<style scoped>
.our-patroness-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  margin-top: calc(80px + 2rem);
  justify-content: center;
}
.redirect-card {
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 4px 4px 10px rgba(31, 39, 89, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue);
  gap: 2rem;
  text-align: center;
}

.redirect-card h1 {
  font-size: var(--font_xl);
}
.redirect-card h2 {
  font-size: var(--font_l);
}

@media screen and (max-width: 1024px) {
  .our-patroness-wrapper {
    padding: 2rem;
    margin-top: calc(60px + 4rem);
  }

  .redirect-card {
    padding: 1rem;
  }
}
</style>