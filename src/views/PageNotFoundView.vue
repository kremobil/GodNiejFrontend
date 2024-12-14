<script>
import MainLink from "@/components/MainLink.vue";
import godniejBackend from "@/axios/GodniejBackend.js";

export default {
  components: {
    MainLink,
  },
  data() {
    return {
      content: null
    }
  },
  mounted() {
    godniejBackend.get('/page404').then(response => response.data.data).then(
        (data) => {
          this.content = data;
        }
    )
  }
}
</script>

<template>
<main id="page-not-found-wrapper" v-if="content">
  <h1>{{ content?.Naglowek }}</h1>
  <h2>{{ content?.Podtytul }}</h2>
  <MainLink to="/">Strona główna</MainLink>
</main>
<main class="loading" v-else>
  <svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" height="48px" viewBox="0 -960 960 960" width="48px" fill="var(--blue)"><path d="M167-160v-60h130l-15-12q-64-51-93-111t-29-134q0-106 62.5-190.5T387-784v62q-75 29-121 96.5T220-477q0 63 23.5 109.5T307-287l30 21v-124h60v230H167Zm407-15v-63q76-29 121-96.5T740-483q0-48-23.5-97.5T655-668l-29-26v124h-60v-230h230v60H665l15 14q60 56 90 120t30 123q0 106-62 191T574-175Z"/></svg>
  <h2>Trwa ładowanie...</h2>
</main>
</template>

<style scoped>
#page-not-found-wrapper {
  width: 100%;
  height: calc(100vh - 60px - 4rem);
  margin-top: calc(60px + 4rem);
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: var(--blue);
}

h1 {
  font-size: var(--font_xl);
}
h2 {
  font-size: var(--font_l);
}

@media screen and (max-width: 1024px) {
  #page-not-found-wrapper {
    height: calc(100vh - 60px - 2rem);
    margin-top: calc(60px + 2rem);
    padding: 2rem;
  }
}

.loading {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  flex-direction: column;
  gap: 2rem;
}
.loading-icon {
  transform-origin: center;
  animation: spin 2s linear infinite reverse;
}

@keyframes spin {
  from {
    transform: rotateZ(0deg);
  } to {
      transform: rotateZ(360deg);
    }
}
</style>