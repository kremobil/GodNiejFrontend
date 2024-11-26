<script>// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import godniejBackend from '@/axios/GodniejBackend';

export default {
  name: "HighlightedSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: null,
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
  mounted() {
    godniejBackend.get('/all-initiative', { 
      params: {
        "populate[0]": "WyroznionePosty",
        "populate[1]": "WyroznionePosty.Zdjecie"
      }
    }).then((response) => response.data.data).then((initiatives) => {
      this.slides = initiatives.WyroznionePosty;
    });
  },
};
</script>

<template>
  <div class="slider-wrapper" v-if="slides">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :navigation="{
          prevEl: '.prev',
          nextEl: '.next',
        }"
        :pagination="{ clickable: true, el: '.pagination', type: 'bullets',  }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :autoplay="{
        delay: 5000,
        }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <router-link :to="`/inicjatywy/${slide.slug}`" class="card promoted_card">
          <div class="card_hover"></div>
          <div class="card_content" :style="{
            backgroundImage: `url('https://backend.godniej.org${slide.Zdjecie.formats.large.url}')`
          }">
            <h4 class="card_header">{{slide.Tytul}}</h4>
          </div>
          <div class="gradient"></div>
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="bottom-bar">
      <div class="prev"><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="var(--magenta)"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></div>
      <div class="pagination"></div>
      <div class="next"><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="var(--magenta)"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  width: 100%;
}
  .swiper-wrapper {
    width: 100%;
    max-width: 100vh;
  }
  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 560px;
    align-items: center;
  }

.card {
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: 500px;
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
  background-size: cover;
  border-radius: 1rem 1rem 2rem 2rem;
  background-position: center;
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
  width: 300%;
  height: 300%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
}
.card:hover .card_hover {
  opacity: 1;
  transform: translate(-50%, -50%) rotate(180deg);
}

.promoted_card .card_header {
  font-size: var(--font_l);
}
.swiper-pagination-bullet {
  background-color: #EA3E93;
}
.bottom-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
}
.pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: fit-content;
}

.next, .prev {
  cursor: pointer;
}

.swiper-slide {
  padding: 4rem;
}

@media screen and (max-width: 1024px) {
  .swiper-slide {
    padding: 2rem;
  }
}
@media screen and (max-width: 512px) {
  .swiper-slide {
    padding: 0;
    max-height: 80vh;
  }
  .card, .card_content, .card .gradient {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .bottom-bar {
    margin-top: 2rem;
  }
  .card, .gradient {
    position: absolute;
    background: linear-gradient(to bottom, white 5%, transparent 30%);
  }
}
</style>