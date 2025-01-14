<script>
import godniejBackend from "@/axios/GodniejBackend";
import MainButton from "@/components/MainButton.vue";
import MainLink from "@/components/MainLink.vue";
import router from "@/router/index.js";

export default {
  name: "InitiativeView",
  components: {MainButton, MainLink},
  data() {
    return {
      initiative: null,
      availableSpots: 0,
      errorMessage: null
    };
  },
  mounted() {
    godniejBackend.get('/posts', {
      params: {
        "filters[slug][$eq]": this.$route.params.slug,
        "populate": "*"
      }
    }).then(response => response.data.data).then(data => {
      if (data.length === 0) {
        router.push("/404");
      }
      const MONTHS = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]

      const date = new Date(data[0].TerminZajec)
      const dateString = data[0].DataDoUstalenia ?
          "Data do ustalenia" :
          `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0') }: ${String(date.getMinutes()).padStart(2, '0')}`
      this.initiative = {
        ...data[0],
        KoniecZapisow: new Date(data[0].KoniecZapisow),
        TerminZajec: dateString
      };

      if (data[0].WlaczZapisy) {
        godniejBackend.get(`/signups-status/${this.$route.params.slug}`).then(response => response.data).then(data => {
          this.availableSpots = data.availableSpots;
        }).catch(error => {
          this.errorMessage = error.response.data.error.message;
        })
      }
    })
  }
}
</script>

<template>
<div class="initiative-wrapper" v-if="initiative">
  <header :style="{
    background: `linear-gradient(to bottom, white 5%, transparent 30%), radial-gradient(ellipse at center, rgba(0,0,0,0.50), transparent), url('https://backend.godniej.org${initiative.Zdjecie.url}') center/cover no-repeat`
  }">
    <div class="header-group">
      <h2>{{ initiative.Tytul }}</h2>
      <h4 v-if="initiative.WlaczZapisy">
        {{ initiative.TerminZajec }} | {{ initiative.Cena > 0 ? initiative.Cena.toFixed(2) + "zł" : "Darmowe Zajęcia!"}}
      </h4>
    </div>
    <div class="sign-up-actions"  v-if="initiative.WlaczZapisy">
      <main-link :to="`/inicjatywy/zapisy/${initiative.slug}`" :class="{
        disabled: availableSpots === 0,
      }">Zapisz się na zajęcia</main-link>
      <h5>{{ errorMessage ?? `Wolne miejsca: ${availableSpots}` }} </h5>
    </div>
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
  text-align: center;
}

h5 {
  color: white;
  font-size: var(--font_l);
  text-align: center;
}
.sign-up-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a.disabled {
  user-select: none;
  pointer-events: none;
  opacity: 0.75;
}
</style>