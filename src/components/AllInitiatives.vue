<script>
import godniejBackend from '@/axios/GodniejBackend';
import router from "@/router/index.js";

export default {
  name: "AllInitiatives",
  data() {
    return {
      initiatives: null,
      pagination: null,
    }
  },
  watch: {
    '$route.query.strona': {
      handler(page) {
        page = page ?? 1
        page = page > 0 ? page : 1

        godniejBackend.get('/posts', {
          params: {
            "pagination[page]":page,
            "pagination[pageSize]": 20,
            "populate[0]": "Zdjecie"
          }
        }).then( async response => {
          if (response.data.meta.pagination.pageCount < page) {
            router.push({
              path: '/inicjatywy',
              query: {
                strona: response.data.meta.pagination.pageCount
              }
            })
          } else {
            this.pagination = response.data.meta.pagination
            return response.data.data
          }
        } ).then( data => this.initiatives = data );
      },
      immediate: true
    }
  },
  mounted() {
    let page = this.$route.query.strona ?? 1

  }
}
</script>

<template>
<div class="all-initiatives-wrapper">
  <h2 data-aos="fade-right">Wszystkie Posty</h2>
  <div class="initiatives-grid">
    <router-link :to="`/inicjatywy/${initiative.slug}`" class="card" v-for="initiative in initiatives" :key="initiative.id" data-aos="zoom-in">
      <div class="card_hover"></div>
      <div class="card_content" :style="{
        backgroundImage: `url('https://backend.godniej.org${initiative.Zdjecie.formats ? initiative.Zdjecie.formats.small.url : initiative.Zdjecie.url}')`,
      }">
        <h4 class="card_header">{{ initiative.Tytul }}</h4>
      </div>
    </router-link>
  </div>
  <div class="pagination" v-if="pagination">
    <div class="controls">
      <router-link :to="`/inicjatywy?strona=${pagination.page - 1}`" v-if="pagination.page - 1 > 0" class="prev">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>      </router-link>
      <router-link :to="`/inicjatywy?strona=${pagination.page - 2}`" v-if="pagination.page - 2 > 0" class="page">
        {{pagination.page - 2}}
      </router-link>
      <router-link :to="`/inicjatywy?strona=${pagination.page - 1}`" v-if="pagination.page - 1 > 0" class="page">
        {{pagination.page - 1}}
      </router-link>
      <router-link :to="`/inicjatywy?strona=${pagination.page}`" class="page active">
        {{pagination.page}}
      </router-link>
      <router-link :to="`/inicjatywy?strona=${pagination.page + 1}`" v-if="pagination.page + 1 <= pagination.pageCount" class="page">
        {{pagination.page + 1}}
      </router-link>
      <router-link :to="`/inicjatywy?strona=${pagination.page + 2}`" v-if="pagination.page + 2 <= pagination.pageCount" class="page">
        {{pagination.page + 2}}
      </router-link>
      <router-link :to="`/inicjatywy?strona=${pagination.page + 1}`" v-if="pagination.page + 1 <= pagination.pageCount" class="next">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
      </router-link>
    </div>
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
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
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
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.controls {
  display: flex;
  gap: 1rem;
  height: 60px;
}
.next, .prev, .page {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
  border: 3px solid var(--blue);
}
.page {
  color: var(--blue);
  font-size: var(--font_l);
  font-weight: bold;
}

.pagination svg {
  fill: var(--blue);
}

.page.active {
  background-color: var(--blue);
  color: white;
}
</style>