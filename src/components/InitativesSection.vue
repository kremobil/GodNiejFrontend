<script>
import MainButton from "@/components/MainButton.vue";
import MainLink from "@/components/MainLink.vue";

export default {
  name: "InitativesSection",
  components: {MainLink, MainButton},
  props: {
    otherPosts: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
    highlightedPost: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
<section id="initiatives-wrapper">
  <h2 data-aos="fade-right">{{ title }}</h2>
  <div class="cards_wrapper">
    <router-link :to="`/inicjatywy/${highlightedPost.slug}`" class="promoted_card card" data-aos="zoom-in-right">
      <div class="card_hover"></div>
      <div class="card_content" :style="{
        background: `url('https://backend.godniej.org${highlightedPost.Zdjecie.url}') center/cover`,
      }">
        <h4 class="card_header">{{ highlightedPost.Tytul }}</h4>
      </div>
    </router-link>
    <router-link :to="`/inicjatywy/${post.slug}`" class="card" :id="`card${index+1}`" v-for="(post, index) in otherPosts" :key="post.id" data-aos="zoom-in-up">
      <div class="card_hover"></div>
      <div class="card_content" :style="{
        background: `url('https://backend.godniej.org${post.Zdjecie.url}') center/cover`,
      }">
        <h4 class="card_header">{{ post.Tytul }}</h4>
      </div>
    </router-link>
    <MainLink to="/inicjatywy" data-aos="zoom-in-up">{{ button }}</MainLink>
  </div>
</section>
</template>

<style scoped>
#initiatives-wrapper {
  width: 100%;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
}
@media (max-height: 1264px) {
  #initiatives-wrapper {
    min-height: calc(100vh - 60px - 2rem);
  }
}

h2 {
  font-size: var(--font_xl);
  color: var(--blue);
}

.cards_wrapper {
  width: 100%;
  min-height: 35rem;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr) 0.25fr;
  gap: 1rem;
}
.promoted_card {
  grid-column: 1/3;
  grid-row: 1/4;
}

.main_link {
  grid-column: 3/5;
}

.card {
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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

.promoted_card .card_header {
  font-size: var(--font_l);
}
@media screen and (max-width: 1264px) and (min-width: 1024px) {
  .cards_wrapper {
    display: grid;
    min-height: 55rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr) 0.25fr;
  }
  .promoted_card {
    grid-column: 1/5;
    grid-row: 1/3;
  }
  #card1 {
    grid-column: 5/7;
  }
  #card2 {
    grid-column: 5/7;
  }
  #card3 {
    grid-column: 1/4;
  }
  #card4 {
    grid-column: 4/7;
  }
  .main_link {
    grid-column: 1/7;
  }
}
@media screen and (max-width: 1023px) and (min-width: 624px) {
  .cards_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr) 0.25fr;
    min-height: 65rem;
  }
  .promoted_card {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .main_link {
    grid-column: 1/3;
  }
}

@media screen and (max-width: 624px) {
  .cards_wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr) 0.25fr;
    min-height: 90rem;
  }
  .promoted_card {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  #card1, #card2, #card3, #card4, .main_link {
    grid-column: 1/2;
  }
}
@media screen and (max-width: 1024px) {
  #initiatives-wrapper {
    padding: 2rem;
  }
}
</style>