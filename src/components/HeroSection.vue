<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import godniejBackend from "@/axios/GodniejBackend.js";
import MainLink from "@/components/MainLink.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "HeroSection",
  components: { MainLink, MainButton, Swiper, SwiperSlide },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    }
  },
  data() {
    return {
      modules: [Autoplay],
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mainButton: {
      type: String,
      required: true,
    },
    secoundaryButton: {
      type: String,
      required: true,
    },
    sponsorsTitle: {
      type: String,
      required: true,
    },
    sponsors: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    const fadeHeroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".image",
        scrub: 1,
        start: "top top",
        end: "50% top",
      }
    })
    fadeHeroTimeline.fromTo("#fade", {
      scaleY: 0,
    }, {
      scaleY: 1,
    })
    window.addEventListener("resize", () => {
      const image = document.querySelector("#hero_image");
      if (image) {
        if (window.innerWidth > 1264) {
          const sectionHeight = document.querySelector(".hero_wrapper").getBoundingClientRect().height
          const windowHeight = window.innerHeight
          if (sectionHeight > windowHeight) {
            image.style.height = "100%";
          } else {
            image.style.height = "100vh";
          }
          image.style.maxHeight = document.querySelector(".content.half").getBoundingClientRect().height + "px";
        } else {
          image.style.maxHeight = "50vh";
        }
      }
    })
  }
}
</script>

<template>
  <section class="hero_wrapper">
    <div class="half content">
      <section class="main-information">
        <h1 data-aos="fade-up">{{ title }}</h1>
        <p data-aos="fade-up">{{ description }}</p>
        <div class="buttons-container">
          <MainButton @click="$emit('openPopup')" data-aos="zoom-in-up">{{ mainButton }}</MainButton>
          <MainLink :secondary="true" to="/inicjatywy" data-aos="zoom-in-up">{{ secoundaryButton }}</MainLink>
        </div>
      </section>
      <section class="our_supporters" v-if="sponsors">
        <h3>{{ sponsorsTitle }}</h3>
        <swiper :modules="modules" :slides-per-view="2" :space-between="50" :loop="true" :breakpoints="{

          512: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1264: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }" :autoplay="{
                delay: 2000,
              }" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide v-for="sponsor, index in sponsors" :key="sponsor.id">
            <a :href="sponsor.link" target="_blank" >
              <img :src="'https://backend.godniej.org' + sponsor.Logo.url" :alt="sponsor.Nazwa" v-if="sponsor.Logo && sponsor.Nazwa">
              <p v-if="sponsor.Nazwa && sponsor.WyswietlNazwe">{{ sponsor.Nazwa }}</p>
            </a>

          </swiper-slide>
        </swiper>
      </section>
    </div>
    <div class="half image">
      <!--        Wave Animated-->
      <div id="wave"></div>
      <div id="fade"></div>
      <div id="fade"></div>
      <!--        Mobile Waves-->
      <div class="mobile-wave top"></div>
      <div class="mobile-wave bottom"></div>
      <img src="@/assets/hero_image.jpeg" alt="test" id="hero_image">
    </div>
  </section>
</template>

<style scoped>
.hero_wrapper {
  display: flex;
  min-height: 100vh;
}

.half {
  min-height: 100vh;
  height: fit-content;
  width: 50%;
}

.image img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: left center;
}

.image {
  position: relative;
  overflow: hidden;
}

#fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, transparent, #ffffff);
  transform-origin: bottom;
}

.image #wave {
  position: absolute;
  top: 0;
  left: -2px;
  height: 200%;
  width: 100px;
  background-image: url("@/assets/wave.png");
  background-repeat: repeat-y;
  background-size: 100% 50%;
  animation: wave 30s infinite linear;
}

@keyframes wave {
  from {
    top: -100%;
  }

  to {
    top: 0;
  }
}

.image #fade {
  position: absolute;
  width: 100%;
  height: 120px;
  bottom: 0;
  left: 0;
}

.content {
  padding-left: 4rem;
  padding-top: calc(80px + 6rem);
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content h1 {
  font-size: var(--font_xxl);
  line-height: 120%;
  font-family: "Segoe Print", sans-serif;
  color: var(--blue);
}

.content p {
  font-size: var(--font_m);
  color: var(--blue);
  margin-top: 4rem;
}

.buttons-container {
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
}

.our_supporters {
  margin-top: 2rem;
}

.our_supporters h3 {
  font-size: var(--font_l);
  color: var(--blue);
}

.our_supporters .swiper {
  padding: 2rem 0;
}

.swiper-slide img {
  max-width: 80%;
  object-fit: contain;
  object-position: left center;
  height: 48px;
}

.swiper-slide p {
  font-size: var(--font_s);
  color: var(--blue);
  font-weight: 600;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
}

.swiper-slide a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-wave {
  display: none;
}

@media (min-width: 1920px) {
  .swiper-slide img {
    .swiper-slide img {
      max-width: 80%;
      object-fit: contain;
      height: 64px;
    }
  }
}

@media (max-width: 1264px) {
  .hero_wrapper {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }

  .half {
    width: 100%;
    height: 100%;
    min-height: unset;
  }

  .image img {
    max-height: 50vh;
    object-fit: cover;
    object-position: center 30%;
  }

  .content p {
    max-width: 50rem;
  }

  .content {
    margin-bottom: 4rem;
  }

  #wave,
  #fade {
    display: none;
  }

  .mobile-wave {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 200%;
    background: url("@/assets/mobile_wave.png") repeat-x;
    background-size: 50% 100%;
    height: 40px;
  }

  .mobile-wave.top {
    animation: top-mobile-wave 45s infinite linear;
  }

  .mobile-wave.bottom {
    animation: bottom-mobile-wave 45s infinite linear;
    bottom: 0;
    top: auto;
  }

  .content {
    padding-top: calc(60px + 6rem);
  }
}

@media screen and (max-width: 1024px) {
  .content {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: calc(60px + 4rem);
  }
}

@media screen and (max-width: 768px) {
  .content p {
    margin-top: 2rem;
  }

  .content .swiper-slide p {
    font-size: var(--font_s);
    margin: 0;
  }

  .content .buttons-container {
    margin-top: 2rem;
    gap: 1rem;
  }

  .buttons-container button {
    padding: 1rem;
  }
}

@media screen and (max-width: 512px) {
  .buttons-container {
    flex-direction: column;
  }
}

@keyframes top-mobile-wave {
  from {
    transform: translateX(-50%) rotateX(180deg);
  }

  to {
    transform: translateX(0%) rotateX(180deg);
  }
}


@keyframes bottom-mobile-wave {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>