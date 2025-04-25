<script>
import MainLink from "@/components/MainLink.vue";
import MemoryAccordion from '../components/MemoryAccordion.vue';
import godniejBackend from "@/axios/GodniejBackend";
import { StrapiBlocks } from 'vue-strapi-blocks-renderer';

export default {
  name: "OurPatronessView",
  components: { MainLink, MemoryAccordion, StrapiBlocks },
  data() {
    return {
      loading: true,
      patronessData: {
        NaglowekSekcjaGlowna: '',
        PodpisZdjeciaCZ1: '',
        PodpisZdjeciaCZ2: '',
        Cytat: '',
        Podpis: '',
        PrzyciskDowiedzSieWiecej: '',
        NaglowekDlaczegoJestPatronka: '',
        PodNaglowekDlaczegoJestPatronka: '',
        TrescDlaczegoJestPatronka: null,
        SekcjeHistorii: [],
        WspomnieniaNaglowek: '',
        Wspomnienia: []
      },
      memories: []
    }
  },
  async created() {
    try {
      const response = await godniejBackend.get('/patroness?populate[SekcjeHistorii][populate][0]=ikonka&populate[SekcjeHistorii][populate][1]=tlo&populate[Wspomnienia][populate]=*');
      
      if (response.data && response.data.data) {
        this.patronessData = response.data.data;
        
        if (this.patronessData.Wspomnienia && Array.isArray(this.patronessData.Wspomnienia)) {
          this.memories = this.patronessData.Wspomnienia.map(memory => ({
            title: memory.Tytul || '',
            content: memory.Tresc || '',
            author: memory.Autor || '',
            source: memory.Zrodlo || ''
          }));
        }
      } else {
        console.error("Nieprawidłowa struktura danych z API:", response.data);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    scrollToBioSection() {
      const bioSection = this.$refs.bioSection;
      if (bioSection) {
        bioSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    getImageUrl(image) {
      if (!image || !image.url) return '';
      return image.url;
    },
    getLargeImageUrl(image) {
      if (!image || !image.formats || !image.formats.large) {
        return this.getImageUrl(image);
      }
      return image.formats.large.url;
    }
  },
}
</script>

<template>
  <main class="loading" v-if="loading">
    <svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" height="48px" viewBox="0 -960 960 960" width="48px" fill="var(--blue)"><path d="M167-160v-60h130l-15-12q-64-51-93-111t-29-134q0-106 62.5-190.5T387-784v62q-75 29-121 96.5T220-477q0 63 23.5 109.5T307-287l30 21v-124h60v230H167Zm407-15v-63q76-29 121-96.5T740-483q0-48-23.5-97.5T655-668l-29-26v124h-60v-230h230v60H665l15 14q60 56 90 120t30 123q0 106-62 191T574-175Z"/></svg>
    <h2>Trwa ładowanie...</h2>
  </main>

  <main v-else>
    <div class="bg_container">
      <div class="shadow"></div>
      <img src="@/assets/patroness_bg.png" alt="" class="bg" />
    </div>
    <section class="our-patroness-hero-wrapper" id="hero_section">
      <h1>{{ patronessData.NaglowekSekcjaGlowna }}</h1>
      <div class="content">
        <div class="image">
          <div class="overflow_gradient"></div>
          <div class="main-info">
            <h3>Stanisława Leszczyńska</h3>
            <h4>({{ patronessData.PodpisZdjeciaCZ1 }}, {{ patronessData.PodpisZdjeciaCZ2 }})</h4>
          </div>
          <img src="@/assets/Stanislawa_Leszczynska.png" alt="Stanisława Leszczyńska" data-aos="fade-up-right" />
        </div>
        <div class="half">
          <div class="main">
            <div class="quote_container">
              <img src="@/assets/quote_open.png" alt="" class="quote_open">
              <p>{{ patronessData.Cytat }}</p>
              <img src="@/assets/quote_close.png" alt="" class="quote_close">
            </div>
            <h2>{{ patronessData.Podpis }}</h2>
          </div>
          <div class="see_more" @click="scrollToBioSection">
            <h3>{{ patronessData.PrzyciskDowiedzSieWiecej }}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
              fill="var(--blue)">
              <path
                d="m480-328 150.67-150.67L584-525.33l-70.67 70.66V-632h-66.66v177.33L376-525.33l-46.67 46.66L480-328Zm0 248q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <div id="our_patroness" class="section" ref="bioSection">
      <header>
        <h2>{{ patronessData.NaglowekDlaczegoJestPatronka }}</h2>
        <h3>{{ patronessData.PodNaglowekDlaczegoJestPatronka }}</h3>
      </header>
      <StrapiBlocks v-if="patronessData.TrescDlaczegoJestPatronka" :content="patronessData.TrescDlaczegoJestPatronka" />
    </div>
    
    <!-- Sekcje historii - dynamicznie generowane na podstawie danych z API -->
    <div v-for="(sekcja, index) in patronessData.SekcjeHistorii" :key="index" 
         id="home_and_family" 
         class="history_section" 
         :class="{ 'reverse': index % 2 !== 0 }">
      <h2>{{ sekcja.Naglowek }}</h2>
      <div class="content">
        <div class="text_wrapper">
          <StrapiBlocks v-if="sekcja.Tresc" :content="sekcja.Tresc" />
          <p v-if="sekcja.zrodlo"><i><b>źródło:</b> {{ sekcja.zrodlo }}</i></p>
        </div>
        <div class="icon_wrapper" :data-aos="index % 2 === 0 ? 'fade-up-left' : 'fade-up-right'">
          <img class="icon" :src="getImageUrl(sekcja.ikonka)" data-aos="zoom-in" />
          <div class="overflow_gradient"></div>
          <img :src="getLargeImageUrl(sekcja.tlo)" alt="" class="background" />
        </div>
      </div>
    </div>

    <div class="quotes" v-if="memories.length > 0">
      <h2>{{ patronessData.WspomnieniaNaglowek }}</h2>
      <MemoryAccordion :memories="memories" />
    </div>
  </main>
</template>

<style scoped>
/* First section styles */
.our-patroness-hero-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  flex-direction: column;
  margin-top: calc(80px + 2rem);
}

.bg_container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
  max-width: 100%;
}

.bg_container img {
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, white, transparent);
}

h1 {
  color: var(--blue);
  font-size: var(--font_xl);
  font-weight: 700;
  padding: 24px 4rem;
  height: calc((100vh - 80px - 2rem) * 0.2);
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  gap: 2rem;
  height: calc((100vh - 80px - 2rem) * 0.8);
}

.content .image {
  max-height: 100%;
  object-fit: contain;
  object-position: bottom left;
  height: auto;
  box-shadow: var(--shadow);
  width: 50%;
  position: relative;
}

.image .main-info {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  max-width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;
  z-index: 1;
}

.main-info h3 {
  font-size: var(--font_m);
  color: var(--blue);
  font-weight: 700;
  text-align: left;
  margin: 0;
}

.main-info h4 {
  font-size: var(--font_s);
  color: var(--blue);
  font-weight: 500;
  text-align: left;
  margin: 0;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom left;
}

.content .half {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding-right: 4rem;
}

.content .quote_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
  position: relative;
  text-align: justify;
}

.quote_container p {
  font-size: var(--font_m);
  color: var(--blue);
  font-weight: 500;
  line-height: 1.5rem;
  text-align: justify;
  font-style: italic;
  margin: 0;
}

.quote_container img {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center center;
}

.quote_open {
  position: absolute;
  top: 0rem;
  left: 0rem;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1rem;
}

.main h2 {
  font-size: var(--font_l);
  color: var(--blue);
  font-weight: 700;
  text-align: right;
  margin: 0;
}

.quote_close {
  position: absolute;
  bottom: 0rem;
  right: 0rem;
}

.overflow_gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 30%;
  background: linear-gradient(to top, white, transparent);
  z-index: 1;
}

.see_more {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  z-index: 2;
}

.see_more h3 {
  font-size: var(--font_l);
  color: var(--blue);
  font-weight: 700;
  position: relative;
  text-align: center;
}

/* End of first section styles */

/* Second section styles */
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  min-height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
  h1 {
    padding: 0 2rem;
  }

  .content {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 2rem;
  }

  .content .image {
    width: 100%;
    height: auto;
    max-height: 50vh;
  }

  .content .half {
    width: 100%;
    padding-right: 0;
    padding: 0 2rem;
  }

  .see_more {
    width: 100%;
    justify-content: center;
    align-items: center;
  }


  .bg_container {
    width: 100%;
  }

  .bg_container img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
  }

  .bg_container .shadow {
    background: linear-gradient(to top, white, transparent);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content .quote_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    position: relative;
    text-align: justify;
  }

  .quote_container img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    object-position: center center;
  }

  .image .main-info {
    bottom: 1rem;
    left: 2rem;
  }
}

#our_patroness h2 {
  font-size: var(--font_xxl);
  color: var(--blue);
  font-weight: 700;
  background: linear-gradient(to right, var(--magenta), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

#our_patroness h3 {
  font-size: var(--font_xl);
  color: var(--blue);
  font-weight: 500;
  text-align: center;
}

#our_patroness p {
  font-size: var(--font_l);
  color: var(--blue);
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
  max-width: 1024px;
}

#our_patroness .highlight {
  background: linear-gradient(to right, var(--magenta), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

#our_patroness {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
}

#our_patroness header {
  position: relative;
}

.history_section {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px - 2rem);
  gap: 1.5rem;
  overflow: hidden;
}

.history_section h2 {
  color: var(--blue);
  font-size: var(--font_xl);
  font-weight: 700;
  padding: 24px 4rem;
  height: calc((100vh - 80px - 2rem) * 0.2);
  display: flex;
  align-items: center;
}

.history_section .content {
  display: flex;
  gap: 2rem;
  height: calc((100vh - 80px - 2rem) * 0.8);
  padding: 0;
}

.history_section .text_wrapper,
.history_section .icon_wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.history_section .icon_wrapper .background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.history_section .icon_wrapper .overflow_gradient {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  background: linear-gradient(to right, white, transparent 50%), linear-gradient(to bottom, white, transparent 50%), linear-gradient(to top, white, transparent 10%), linear-gradient(135deg, white, transparent 75%), rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
}

.history_section .icon_wrapper .icon {
  width: 512px;
  height: 512px;
  z-index: 2;
}

.history_section .text_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4rem;
  font-size: var(--font_m);
  color: var(--blue);
  gap: 0.5rem;
  z-index: 2;
}

.history_section.reverse .content {
  flex-direction: row-reverse;
  text-align: right;
}

.history_section.reverse h2 {
  text-align: right;
}

.history_section.reverse {
  align-items: flex-end;
}

.history_section.reverse .text_wrapper {
  font-size: var(--font_l);
  color: var(--blue);
  gap: 1rem;
  z-index: 2;
}

.history_section.reverse .overflow_gradient {
  background: linear-gradient(to left, white, transparent 50%), linear-gradient(to bottom, white, transparent 50%), linear-gradient(to top, white, transparent 10%), linear-gradient(225deg, white, transparent 75%), rgba(255, 255, 255, 0.5);
}
.quotes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  min-height: calc(100vh - 80px - 2rem);
  gap: 2rem;
  overflow: hidden;
}

.quotes h2 {
  font-size: var(--font_xxl);
  color: var(--blue);
  font-weight: 700;
  background: linear-gradient(to right, var(--magenta), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .history_section h2 {
    height: auto;
  }
  .history_section .content {
    height: auto;
    flex-direction: column;
    width: 100%;
  }

  .history_section.reverse .content {
    flex-direction: column;
  }
  .history_section .text_wrapper {
    padding: 0 2rem;
    width: 100%;
    align-items: flex-start;
  }

  .history_section .icon_wrapper {
    width: 100%;
    height: auto;
    max-height: 50vh;
  }

  .history_section .icon_wrapper .background {
    width: 100%;
    height: 100%;
    max-height: 50vh;
    object-fit: cover;
    top: auto;
    bottom: 0;
  }

  .history_section .icon_wrapper .overflow_gradient {
    width: 100%;
    height: auto;
    max-height: 50vh;
    background: linear-gradient(to left, white, transparent 25%), linear-gradient(to bottom, white, transparent 35%), linear-gradient(to top, white, transparent 15%), linear-gradient(to right, white, transparent 25%), rgba(255, 255, 255, 0.5);
  }

  .history_section h2 {
    padding: 0 2rem;
  }

  .history_section .icon_wrapper .icon {
    width: min(80vw, 256px);
    height: min(80vw, 256px);
  }
  
  .our-patroness-hero-wrapper .content .image .overflow_gradient {
    width: 100%;
  }
}
</style>