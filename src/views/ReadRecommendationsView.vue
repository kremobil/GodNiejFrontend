<script>
import godniejBackend from "@/axios/GodniejBackend";
import MainLink from "@/components/MainLink.vue";
import RecomendationCard from "@/components/RecomendationCard.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { Controller, EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  name: "ReadRecommendationsView",
  components: { MainLink, RecomendationCard, Swiper, SwiperSlide },
  data() {
    return {
      reccomendationsData: null,
      activeCategory: 0,
      isScrollingProgrammatically: false,
      swiper: null,
      modules: [Pagination, Controller],
      resizeTimeout: null
    };
  },
  methods: {
    onSlideChange(swiper) {
      if (!this.isScrollingProgrammatically) {
        this.activeCategory = swiper.activeIndex;
      }
    },
    handleResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  },
  watch: {

    activeCategory(newValue) {
      this.isScrollingProgrammatically = true;
      this.swiper.slideTo(newValue, 500, false);
      gsap.to(window, {
        scrollTo: {
          y: this.$refs.categoriesSections[newValue],
          offsetY: 112,
          ease: "power2.inOut",
          duration: 0.5,
        },
        onComplete: () => {
          this.isScrollingProgrammatically = false;
        }
      })
    },
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    window.removeEventListener('resize', this.handleResize);

  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    window.addEventListener('resize', this.handleResize);


    godniejBackend.get("/categories", {
      params: {
        "populate[0]": "PolecaneTresci",
        "populate[PolecaneTresci][populate][0]": "Zdjecie",
        "populate[PolecaneTresci][populate][1]": "DodatkoweCechy",
        "populate[PolecaneTresci][populate][2]": "Sekcje"
      }
    }).then((response) => {
      console.log("Fetched categories:", response.data.data);

      this.reccomendationsData = response.data.data;

      this.$nextTick(() => {
        this.$refs.categoriesSections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top-=100px top+=112px",
            end: "bottom+=100px bottom",
            onLeave: () => {
              if (index >= this.$refs.categoriesSections.length - 1) return;

              if (this.activeCategory !== index) return;

              if (this.isScrollingProgrammatically) return;

              this.activeCategory = index + 1;
            },
            onLeaveBack: () => {
              if (index <= 0) return;

              if (this.activeCategory !== index) return;

              if (this.isScrollingProgrammatically) return;

              this.activeCategory = index - 1;
            }
          })
        });

      })

    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  },
}
</script>

<template>
  <div class="read-recommendations-wrapper">
    <h1>Warte Przeczytania</h1>
    <swiper :grabCursor="true" :scrollbar="{ draggable: true }" :centeredSlides="true" :slidesPerView="1" :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      512: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }" :modules="modules" class="mySwiper" @slideChange="onSlideChange"
      @swiper="swiperInstance => { swiper = swiperInstance }">
      <swiper-slide v-for="(category, index) in reccomendationsData" :key="category.id" @click="activeCategory = index">
        <h3 :class="{ selected: activeCategory == index }">{{ category.Nazwa }}</h3>
      </swiper-slide>
    </swiper>
    <main v-if="reccomendationsData">
      <aside>
        <button :class="{
          selected: activeCategory == index
        }" v-for="(category, index) in reccomendationsData" :key="category.id" @click="activeCategory = index">{{
          category.Nazwa }}</button>
      </aside>
      <div class="main_content">
        <section v-for="category in reccomendationsData" :key="category.id"
          ref="categoriesSections">
          <h2 v-if="category.PolecaneTresci.length === 0">Przykro nam ale w tej kategorii nie ma jeszcze żadnych treści.
          </h2>
          <div class="cards-grid" v-else>
            <RecomendationCard v-for="recomendation in category.PolecaneTresci" :key="recomendation.id"
              :title="recomendation.Tytul" :author="recomendation.Autor" :source="recomendation.Zrodlo"
              :type="recomendation.Typ" :slug="recomendation.slug"
              :image="'https://backend.godniej.org' + (recomendation.Zdjecie.formats?.small?.url || recomendation.Zdjecie.url)" />
          </div>
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
  color: var(--blue);
  display: flex;
  align-items: center;
}

main {
  display: flex;
  gap: 2rem;
  width: 100%;
  align-items: flex-start;
}

aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20%;
  position: sticky;
  top: calc(80px + 2rem);
  padding-top: 2rem;
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
  align-items: center;
  justify-content: center;
  width: 100%;
}

.main_content .cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, clamp(200px, calc(150px + 8vw), 400px));
  justify-content: center;
  gap: 2rem;
  width: 100%;

}


.swiper {
  width: 100%;
  position: sticky;
  top: calc(60px + 2rem);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0));
  padding: 2rem 0;
  display: none;
}

.swiper-wrapper {
  background-color: black;
  width: 100%;
}

.swiper-slide {
  width: auto;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.swiper-slide h3 {
  background: transparent;
  color: var(--blue);
  opacity: 0.5;
  font-size: var(--font_m);
  text-align: center;
  border: none;
  transition: font-size 0.2s ease-in-out, font-weight 0.2s ease-in-out;
  text-align: center;
}

.swiper-slide-active h3 {
  font-size: var(--font_l);
  font-weight: 600;
  opacity: 1;
}

.emptyInfo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}

h2 {
  color: var(--blue);
  font-size: var(--font_l);
}

/* Mobile Styles */
@media screen and (max-width: 768px) {
  .swiper {
    display: block;
  }

  .read-recommendations-wrapper {
    padding: 2rem;
    align-items: center;
  }

  aside {
    display: none;
  }

  .main_content {
    width: 100%;
  }

  .main_content section {
    padding: 1rem 0;
  }

  h1 {
    height: auto;
    padding: 1rem 0;
    font-size: var(--font_xl);
    text-align: center;
  }

}
</style>