<script>
import Daria from "@/assets/Daria_Gralik_Resized.png"


import MainButton from "@/components/MainButton.vue";

export default {
  name: 'OurTeamSection',
  components: {MainButton},
  data() {
    return {
      active: false,
      detailedView: null
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    card1Title: {
      type: String,
      required: true
    },
    card1Text: {
      type: String,
      required: true
    },
    card1Image: {
      type: Object,
      required: true
    },
    card2Title: {
      type: String,
      required: true
    },
    card2Text: {
      type: String,
      required: true
    },
    card2Image: {
      type: Object,
      required: true
    },
    card3Title: {
      type: String,
      required: true
    },
    card3Text: {
      type: String,
      required: true
    },
    card3Image: {
      type: Object,
      required: true
    }
  },
  methods: {
    showDetails(name, text, url, alt) {
      this.detailedView = {
        name,
        text,
        url,
        alt
      }
    }
  }
}
</script>

<template>
  <section id="our-team-wrapper">
    <h2>{{ title }}</h2>
    <div class="personal-card" data-aos="zoom-out" data-aos-duration="250">
      <div class="img_container" data-aos="fade-up-right" data-aos-delay="250">
        <img class="flip" :src="`https://backend.godniej.org${card1Image.formats.small.url}`" :alt="card1Image.alternativeText">
      </div>
      <div class="content">
        <h3 data-aos="fade-up-left" data-aos-delay="250">{{ card1Title }}</h3>
        <p data-aos="fade-up-left" data-aos-delay="250">{{ card1Text }}</p>
        <button @click="showDetails(card1Title, card1Text, `https://backend.godniej.org${card1Image.url}`, card1Image.alternativeText)" data-aos="fade-up-left" data-aos-delay="250">Czytaj więcej</button>
      </div>
    </div>
    <div class="personal-card flipped_card" data-aos="zoom-out" data-aos-duration="250">
      <div class="content">
        <h3 data-aos="fade-up-right" data-aos-delay="250">{{ card2Title }}</h3>
        <p data-aos="fade-up-right" data-aos-delay="250">{{ card2Text }}</p>
        <button @click="showDetails(card2Title, card2Text, `https://backend.godniej.org${card2Image.url}`, card2Image.alternativeText)" data-aos="fade-up-right" data-aos-delay="250">Czytaj więcej</button>

      </div>
      <div class="img_container" data-aos="fade-up-left" data-aos-delay="250">
        <img :src="`https://backend.godniej.org${card2Image.formats.small.url}`" :alt="card2Image.alternativeText"/>
      </div>

    </div>
    <div class="personal-card" data-aos="zoom-out" data-aos-duration="250">
      <div class="img_container" data-aos="fade-up-right" data-aos-delay="250">
        <img class="flip" :src="`https://backend.godniej.org${card3Image.formats.small.url}`" :alt="card3Image.alternativeText">
      </div>
      <div class="content">
        <h3 data-aos="fade-up-left" data-aos-delay="250">{{ card3Title }}</h3>
        <p data-aos="fade-up-left" data-aos-delay="250">{{ card3Text }}</p>
        <button @click="showDetails(card3Title, card3Text, `https://backend.godniej.org${card3Image.formats.medium.url}`, card3Image.alternativeText)" data-aos="fade-up-left" data-aos-delay="250">Czytaj więcej</button>
      </div>
    </div>
  </section>
  <teleport to="body">
    <div class="details_shadow" v-if="detailedView">
      <div class="details_card">
        <div class="left-side">
          <div class="portrait_wrapper">
            <img :src="detailedView.url" :alt="detailedView.alt">
            <div class="gradient"></div>
          </div>
          <h3>{{ detailedView.name }}</h3>

        </div>
        <div class="vertical-line"></div>
        <div class="right-side">
          <p>
            {{ detailedView.text }}
          </p>
          <main-button @click="detailedView = null">Powrót</main-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
#our-team-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}
h2 {
  color: var(--blue);
  font-size: var(--font_xl);
}
.personal-card {
  background: linear-gradient(to right, var(--yellow), var(--magenta), var(--blue));
  height: 300px;
  width: 100%;
  max-width: 1500px;
  border-radius: 1rem;
  padding-inline: 2rem;
  color: white;
  display: flex;
}
.img_container {
  min-width: 300px;
  width: 300px;
  height: 300px;
  position: relative;
}

.img_container img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130%;
  object-fit: contain;
}

img.flip {
  transform: rotateY(180deg);
}

.content {
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.content h3 {
  font-size: calc(var(--font_l) + 8px);
}
.content p {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: var(--font_m);
  overflow: hidden;
}

.flipped_card {
  background: linear-gradient(to left, var(--yellow), var(--magenta), var(--blue));
}

.flipped_card .content {
  align-items: flex-end;
  text-align: right;
}

.content button {
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  text-decoration: underline;
  font-size: var(--font_l);
  width: fit-content;
}

@media screen and (max-width: 1024px) {
  #our-team-wrapper {
    padding: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .personal-card {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    text-align: center;
  }
  .content {
    align-items: center;
    padding: 1rem;
  }
  .flipped_card .content {
    align-items: center;
    text-align: center;
  }
  .flipped_card {
    flex-direction: column;
  }
  .content {
    gap: 0.5rem;
  }
  .img_container img, .img_container {
    height: 300px;
    object-position: bottom center;
  }
}


.details_shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
}

.details_card {
  margin: 4rem auto;
  width: calc(100% - 8rem);
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  height: calc(100vh - 8rem);
}

.details_card .left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  text-align: center;
}
.left-side img {
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  object-position: bottom;
  max-height: 100%;
}
.left-side h3 {
  font-size: calc(var(--font_l) * 1.5);
  color: var(--blue);
}
.right-side {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--blue);
  gap: 2rem;
}
.right-side p {
  font-size: var(--font_m);
  overflow-x: hidden;
  overflow-y: auto;
}

.vertical-line {
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, white, var(--yellow), var(--magenta), var(--blue), white);
}
.portrait_wrapper {
  position: relative;
  max-height: 80%;
}
.portrait_wrapper .gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20%;
  background: linear-gradient(to top, white 40%, transparent);
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .details_card {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .details_card {
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
  .vertical-line {
    width: 100%;
    min-height: 4px;
    height: 4px;
    background: linear-gradient(to right, white, var(--yellow), var(--magenta), var(--blue), white);
  }
  .details_card img {
    max-width: 300px;
  }

  .details_card .right-side {
    padding-inline: 1rem;
    gap: 2rem;
  }
  .details_card button {
    cursor: pointer;
  }
}
</style>