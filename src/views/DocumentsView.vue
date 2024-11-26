<script>
import godniejBackend from "@/axios/GodniejBackend.js";

export default {
  name: 'DocumentsView',
  data() {
    return {
      documents: null,
    }
  },
  mounted() {
    godniejBackend.get("https://backend.godniej.org/api/dokumenty", {
      params: {
        "populate[Dokumenty][populate][0]": "Plik"
      }
    }).then(res => res.data.data.Dokumenty).then(
        (data) => {
          this.documents = data
        }
    )
  }
}
</script>

<template>
<div class="documents-wrapper">
  <h1>Dokumenty do pobrania</h1>
  <ul class="documents-list">
    <li v-for="document in documents">
      <div class="name">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z"/></svg>
        <h3>{{ document.Nazwa }}</h3>
      </div>
      <a target="_blank" :href="`https://backend.godniej.org${document.Plik.url}`">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>
      </a>
    </li>
  </ul>
</div>
</template>

<style scoped>
.documents-wrapper {
  width: 100vw;
  min-height: calc(100vh - 80px - 2rem);
  margin-top: calc(80px + 2rem);
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}


.documents-wrapper h1 {
  font-size: var(--font_xl);
  color: var(--blue);
}
.documents-list {
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
  gap: 1rem;
}
.documents-list li {
  padding: 2rem;
  background-color: var(--blue);
  color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 1rem;
}
.documents-list li .name {
  display: flex;
  font-size: var(--font_m);
  align-items: center;
  gap: 1rem;
}
.documents-list li a {
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .documents-wrapper {
    min-height: calc(100vh - 60px - 2rem);
    margin-top: calc(60px + 2rem);
    padding: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .documents-wrapper li {
    padding: 1rem;
  }
}
</style>