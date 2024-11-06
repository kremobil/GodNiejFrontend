<script>
import godniejBackend from '@/axios/GodniejBackend';

export default {
  name: "AllInitiatives",
  data() {
    return {
      initiatives: null
    }
  },
  mounted() {
    godniejBackend.get('/posts', {
      params: {
        "pagination[page]":1,
        "pagination[pageSize]":20,
        "populate[0]": "Zdjecie"
      }
    }).then( response => response.data.data ).then( data => this.initiatives = data );
  }
}
</script>

<template>
<div class="all-initiatives-wrapper">
  <h2>Wszystkie Posty</h2>
  <div class="initiatives-grid">
    <router-link :to="`/inicjatywy/${initiative.slug}`" class="card" v-for="initiative in initiatives" :key="initiative.id">
      <div class="card_hover"></div>
      <div class="card_content" :style="{
        backgroundImage: `url('https://backend.godniej.org${initiative.Zdjecie.url}')`,
      }">
        <h4 class="card_header">{{ initiative.Tytul }}</h4>
      </div>
    </router-link>
  </div>
</div>
</template>

<style scoped>
h2 {
  font-size: var(--font_xl);
  margin-bottom: 2rem;
  user-select: none;
}
.all-initiatives-wrapper {
  color: var(--blue);
  padding: 2rem 4rem;
}
.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
}
.card {
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: 300px;
  width: 100%;
}

.card_content {
  top: 4px;
  position: absolute;
  left: 4px;
  background-color: #EA3E93;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url("@/assets/card_placeholder.jpg");
  background-size: cover;
  border-radius: 1rem 1rem 2rem 2rem;
}
.card_content .card_header {
  padding: 1rem 2rem;
  width: 100%;
  background: linear-gradient(90deg, var(--magenta), var(--yellow));
  color: var(--blue);
  text-align: center;
  font-size: var(--font_s);
  border-radius: 0 0 1rem 1rem;
}
.card_hover {
  background: conic-gradient(var(--yellow) 0%, var(--magenta) 10%, var(--yellow) 35%, var(--magenta)70%, var(--yellow) 80%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
}
.card:hover .card_hover {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(180deg);
}

@media screen and (max-width: 1024px) {
  .all-initiatives-wrapper {
    padding: 2rem;
  }
}
</style>