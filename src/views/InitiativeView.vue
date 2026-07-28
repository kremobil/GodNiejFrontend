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
          `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0') }:${String(date.getMinutes()).padStart(2, '0')}`
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
      <div class="details" v-if="initiative.WlaczZapisy">
        <div class="detail">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#efbe1d"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
          <h4>{{ initiative.TerminZajec }}</h4>
        </div>
        <div class="detail">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#efbe1d"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
          <h4>{{ initiative.NiestandardowaCena ? initiative.NiestandardowaCena : initiative.Cena > 0 ? initiative.Cena.toFixed(2) + "zł" : "Darmowe Zajęcia!"}}</h4>
        </div>
        <div class="detail" v-if="initiative.MiejsceZajec">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#efbe1d"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/></svg>
          <h4>{{ initiative.MiejsceZajec}}</h4>
        </div>
      </div>
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
  text-align: center;
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
.details {
  display: flex;
  gap: 1rem 2rem;
  max-width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
}
.detail {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>