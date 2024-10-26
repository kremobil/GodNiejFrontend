<script>
import godniejBackend from "@/axios/GodniejBackend";
import MainButton from "@/components/MainButton.vue";
import MainLink from "@/components/MainLink.vue";

export default {
  name: "InitiativeView",
  components: {MainButton, MainLink},
  data() {
    return {
      initiative: null,
      registerForWorkshop: true,
    };
  },
  mounted() {
    godniejBackend.get('/posts', {
      params: {
        "filters[slug][$eq]": this.$route.params.slug,
        "populate": "*"
      }
    }).then(response => response.data.data).then(data => {
      this.initiative = data[0];
    })
  }
}
</script>

<template>
<div class="initiative-wrapper" v-if="initiative">
  <header :style="{
    background: `linear-gradient(to bottom, white 5%, transparent 30%), radial-gradient(ellipse at center, rgba(0,0,0,0.50), transparent), url('http://localhost:1337${initiative.Zdjecie.url}') center/cover no-repeat`
  }">
    <div class="header-group">
      <h2>{{ initiative.Tytul }}</h2>
      <h4>28.10.2024 | 50zł</h4>
    </div>
    <main-link :to="`/inicjatywy/zapisy/${initiative.slug}`" v-if="registerForWorkshop">Zapisz się na zajęcia</main-link>
    <main-button  @click="$emit('openPopup')" v-else>Wesprzyj fundację</main-button>
  </header>
  <article v-html="initiative.Tresc">

  </article>
</div>
</template>

<style scoped>
.initiative-wrapper {
  width: 100%;
}

header {
  width: 100%;
  height: calc(80px + 4rem + 25rem);
  padding: calc(80px + 4rem + 2rem) 4rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

header h2 {
  font-size: var(--font_xl);
  color: white;
}

header button {
  cursor: pointer;
}
.initiative-wrapper {
  min-height: 100vh;
}
article {
  margin: 0 auto;
  max-width: 1024px;
  padding: 2rem;
}

article:deep(li) {
  margin-left: 2rem;
}

article:deep(h1) {
  font-size: var(--font_xxl);
}

article:deep(h2) {
  font-size: var(--font_xl);
}
article:deep(h3) {
  font-size: var(--font_l);
}

article:deep(p) {
  font-size: var(--font_m);
}

article:deep(img) {
  max-width: 100%;
}
.header-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
h4 {
  color: var(--yellow);
  font-size: var(--font_l);
}
</style>