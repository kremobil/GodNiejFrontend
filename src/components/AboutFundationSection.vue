<script>
import MainButton from "@/components/MainButton.vue";
import { StrapiBlocks } from 'vue-strapi-blocks-renderer';

export default {
  name: "AboutFundationSection",
  components: {MainButton, StrapiBlocks},
  props: {
    title1: {type: String, required: true},
    content1: {type: String, required: true},
    image1: {type: Object, required: true},
    buttonText: {type: String, required: true},
    title2: {type: String, required: true},
    content2: {type: String, required: true},
    image2: {type: Object, required: true},
  },
  mounted() {
    let element = this.$refs.content1.nextSibling

    while (element.nextSibling.tagName !== "BUTTON") {
      element.setAttribute("data-aos", "fade-up-left");
      element = element.nextSibling;
    }

    element = this.$refs.content2
    while (element.nextSibling.nodeName !== "#text") {
      element = element.nextSibling;
      element.setAttribute("data-aos", "fade-up-right");
    }
  }
}
</script>

<template>
  <section class="about-foundation-wrapper">
    <div class="half image-half" data-aos="zoom-out-up">
      <img :src="`https://backend.godniej.org${image1.url}`" :alt="image1.alternativeText">
      <div class="gradient"></div>
    </div>
    <div class="half content-half">
      <h2 data-aos="fade-up-left">{{ title1 }}</h2>
      <StrapiBlocks :content="content1" ref="content1"/>
      <main-button data-aos="fade-up-left">{{ buttonText }}</main-button>
    </div>
  </section>
  <section class="our-mission-wrapper">
    <div class="half content-half">
      <h2 data-aos="fade-up-right">{{ title2 }}</h2>
      <StrapiBlocks :content="content2" ref="content2"/>
    </div>
    <div class="half image-half" data-aos="zoom-out-up">
      <img :src="`https://backend.godniej.org${image2.url}`" :alt="image2.alternativeText">
      <div class="gradient"></div>
    </div>
  </section>
</template>

<style scoped>
.about-foundation-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  margin-top: calc(80px + 2rem);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}
.half {
  display: flex;
  flex: 1 1 344px;
  height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
  object-fit: contain;
  object-position: bottom;
}
.gradient {
  height: 100px;
  background: linear-gradient(to top, #fff, transparent);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.image-half {
  justify-content: flex-end;
}

.content-half h2 {
  font-size: var(--font_xl);
  color: var(--blue);
  text-align: center;
}
.content-half:deep(p) {
  font-size: var(--font_m);
  margin-top: 1rem;
  text-align: justify;
}
.content-half button {
  margin-top: 2rem;
}
.our-mission-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}

@media screen and (max-width: 1024px) {
  .about-foundation-wrapper, .our-mission-wrapper {
    padding: 2rem;
  }
}

</style>