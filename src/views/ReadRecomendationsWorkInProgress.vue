<script>
import MainLink from "@/components/MainLink.vue";

export default {
  name: "ReadRecommendationsWorkInProgress" ,
  components: {MainLink}
}
</script>

<template>
<div class="read-recommendations-wrapper">
  <div class="redirect-card">
    <h1>Zapraszamy niebawem 😊</h1>
    <h2>Wciąż pracujemy nad tą zakładką by dostarczyć ci jak najlepszej jakości treści.</h2>
    <MainLink to="/" secondary>Powrót na stronę główną</MainLink>
  </div>
</div>
</template>

<style scoped>
.read-recommendations-wrapper {
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
</style>