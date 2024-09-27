<script>
import MainLink from "@/components/MainLink.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay} from "swiper/modules";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
  name: "AboutUsSection",
  components: {Swiper, SwiperSlide, MainLink},
  data() {
    return {
      modules: [Autoplay],
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const aboutUsAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-us-section-wrapper",
        start: "top 50%",
        end: "50% 50%",
        scrub: 1,
      }
    })

    aboutUsAnimationTimeline.fromTo(".about-us-section-wrapper", {
      backgroundColor: "rgba(255, 255, 255, 1)"
    }, {
      backgroundColor: "rgba(255, 255, 255, 0.5)"
    })
  }
}
</script>

<template>
<section class="about-us-section-wrapper">
  <div class="basic_info">
    <h2>Poznaj GodNiej</h2>
    <p>Fundacja GodNiej jest owocem spotkania trzech różnych dróg życiowych, trzech różnych pokoleń, trzech ścieżek zawodowych, ale tej samej wrażliwości, żeby to, co piękne i trudne w kobiecości zauważyć, dowartościować i wspólnie przeżyć. Skupiamy się na działaniach, które nadają sens każdemu  doświadczeniu kobiety, na każdym etapie jej życia: od pierwszych kroków dziewczynki ku kobiecości, przez macierzyństwo, aż po dojrzałą kobiecość. Wspieramy też osoby, które jej w tej drodze towarzyszą.</p>
    <MainLink to="/o-nas">Dowiedz się więcej</MainLink>
  </div>
  <div class="comments">
    <h3>Opinie naszych klientów</h3>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="16"
        :loop="true"
        :autoplay="{
                delay: 2000,
              }"
        :breakpoints="{
          624: {
          slidesPerView: 2,
          spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 16
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="card">
          <div class="person_info">
            <img src="@/assets/smiling-portrait-beautiful-young-woman-looking-camera.jpg" alt="zdjęcie profliowe" class="profile_pic">
            <!--Źródło freepik.com-->
            <h4 class="name">Bożena</h4>
          </div>
          <p class="content">“Lorem ipsum dolor sit amet consectetur. Consequat tempor volutpat sed dictum integer risus. Eget aenean diam cras dui elementum facilisis condimentum justo nec. Lorem purus urna mattis auctor mi eu eu risus. Imperdiet tincidunt viverra libero neque parturient.”</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <div class="person_info">
            <img src="@/assets/profile_pic_2.png" alt="zdjęcie profliowe" class="profile_pic">
            <!--Źródło freepik.com-->
            <h4 class="name">Basia</h4>
          </div>
          <p class="content">“Lorem ipsum dolor sit amet consectetur. Consequat tempor volutpat sed dictum integer risus. Eget aenean diam cras dui elementum facilisis condimentum justo nec. Lorem purus urna mattis auctor mi eu eu risus. Imperdiet tincidunt viverra libero neque parturient.”</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <div class="person_info">
            <img src="@/assets/profile_pic_1.jpg" alt="zdjęcie profliowe" class="profile_pic">
            <!--Źródło freepik.com-->
            <h4 class="name">Magda</h4>
          </div>
          <p class="content">“Lorem ipsum dolor sit amet consectetur. Consequat tempor volutpat sed dictum integer risus. Eget aenean diam cras dui elementum facilisis condimentum justo nec. Lorem purus urna mattis auctor mi eu eu risus. Imperdiet tincidunt viverra libero neque parturient.”</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <div class="person_info">
            <img src="@/assets/profile_pic_3.png" alt="zdjęcie profliowe" class="profile_pic">
            <!--Źródło freepik.com-->
            <h4 class="name">Anna</h4>
          </div>
          <p class="content">“Lorem ipsum dolor sit amet consectetur. Consequat tempor volutpat sed dictum integer risus. Eget aenean diam cras dui elementum facilisis condimentum justo nec. Lorem purus urna mattis auctor mi eu eu risus. Imperdiet tincidunt viverra libero neque parturient.”</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</section>
</template>

<style scoped>
.about-us-section-wrapper {
  min-height: 100vh;
  //background-color: ; /* Półprzezroczysty kolor tła */
  background: linear-gradient(180deg, #fff, transparent 20%), linear-gradient(0deg, #fff, transparent 20%), url("@/assets/about_us_bg.png") no-repeat top center; /* Obraz tła */
  background-size: cover; /* Dopasowanie obrazu do kontenera */
  background-blend-mode: overlay; /* Tryb mieszania tła */
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}
.basic_info {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 60vh;
  color: var(--blue);
  max-width: 75rem;
  text-align: center;
}
.basic_info h2 {
  font-size: var(--font_xl);
}
.basic_info p {
  font-size: var(--font_m);
}
.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.comments h3 {
  color: var(--blue);
  font-size: var(--font_l);
}
.swiper {
  width: 100%;
}
.swiper-wrapper {
  overflow-y: visible;
}
.swiper-slide {
  padding: 1rem;
}
.card {
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card .person_info {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.person_info img {
  border-radius: 100rem;
  border: 2px solid var(--magenta);
  width: 48px;
  height: 48px;
}
.person_info h4 {
  color: #EA3E93;
  font-size: var(--font_m);
}
.card p {
  padding: 0;
  font-size: var(--font_s);
  color: var(--blue);
  font-weight: 500;
  text-align: justify;
}
@media screen and (max-width: 1024px) {
  .about-us-section-wrapper {
    padding: 2rem;
  }
}
</style>