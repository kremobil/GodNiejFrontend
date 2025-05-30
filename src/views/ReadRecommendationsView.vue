<script>
import MainLink from "@/components/MainLink.vue";
import RecomendationCard from "@/components/RecomendationCard.vue";

export default {
  name: "ReadRecommendationsView",
  components: { MainLink, RecomendationCard }
}
</script>

<template>
  <div class="read-recommendations-wrapper">
    <h1>Warte Przeczytania</h1>
    <main>
      <aside>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla studentów i medyków</button>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla kobiet w ciąży i połogu</button>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla mężczyzn</button>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla mam</button>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla nastolatek</button>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla kobiet dojrzałych</button>
        <button @click="(e) => { e.target.classList.toggle('selected') }">Dla potrzebujących wsparcia</button>
      </aside>
      <div class="main_content">
        <section>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
        </section>
        <section>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
        </section>
        <section>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
        </section>
        <section>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
        </section>
        <section>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
          <RecomendationCard></RecomendationCard>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.read-recommendations-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  flex-direction: column;
  gap: 2rem;
  margin-top: calc(80px + 2rem);
}

h1 {
  font-size: var(--font_xl);
  height: calc((100vh - 80px - 2rem) / 5);
  background: red;
  display: flex;
  align-items: center;
}

main {
  display: flex;
  gap: 2rem;
  width: 100%;
}

aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20%;
  position: sticky;
  top: calc(80px + 2rem);
}

aside button {
  background: transparent;
  color: var(--blue);
  font-size: var(--font_s);
  text-align: left;
  border: none;
  transition: font-size 0.2s ease-in-out, font-weight 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.5rem 0;
}

aside button.selected {
  font-size: var(--font_m);
  font-weight: 600;
}
.main_content {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.main_content section {
  display: flex;
  padding: 2rem;
  min-height: calc(100vh - 60px - 2rem);
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
}
</style>