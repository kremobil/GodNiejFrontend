<template lang="html">
    <main id="workshops-registration-wrapper">
        <div class="progress-bar">
          <div class="progress-line"></div>
          <div class="progress-dot">
            <h3>Wybierz zajęcia</h3>
          </div>
          <div class="progress-dot">
            <h3>Wypełnij formularz</h3>
          </div>
          <div class="progress-dot">
            <h3>Opłać zajęcia</h3>
          </div>
        </div>
        <div class="content">
          <component :is="currentComponent"></component>
          <div class="order-details" v-if="initiativeData">
            <img :src="`http://localhost:1337${initiativeData.url}`" :alt="initiativeData.alternativeText">
          </div>
        </div>
    </main>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";
import godniejBackend from "@/axios/GodniejBackend.js";

export default {
  components: {RegisterForm},
  data() {
    return {
      currentComponent: "register-form",
      initiativeData: null
    }
  },
  mounted() {
    godniejBackend.get(`/posts/${this.$route.params.id}`, {
      params: {
        "populate": "Zdjecie",
      }
    }).then(response => response.data.data).then((data) => {console.log(data);this.initiativeData = data})
  }
}
</script>
<style scoped>
    #workshops-registration-wrapper {
      width: 100%;
      display: flex;
      min-height: calc(100vh - 80px - 2rem);
      padding: 4rem;
      flex-direction: column;
      align-items: center;
      gap: 6rem;
      margin-top: calc(80px + 2rem);
    }

    .progress-bar {
      width: 100%;
      height: 6px;
      display: flex;
      justify-content: space-between;
      background: var(--blue) 50%;
      background-clip: content-box;
      padding: 0 6px;
      position: relative;
    }
    .progress-dot {
      width: 6px;
      height: 6px;
      outline: 6px solid var(--blue);
      border-radius: 50%;
      background: var(--blue);
      position: relative;
    }
    .progress-dot h3 {
      font-size: var(--font_m);
      color: var(--blue);
      font-weight: 500;
      position: absolute;
      bottom: -8px;
      left: 8px;
      transform: translateX(-50%) translateY(100%);
      text-align: center;
    }
    @media screen and (max-width: 1024px) {
      #workshops-registration-wrapper {
        padding: 2rem;
      }
    }
    .progress-line {
      width: 50%;
      height: 100%;
      left: 0;
      top: 0;
      background: var(--yellow);
      position: absolute;
    }
    .content {
      display: flex;
      gap: 1rem;
      width: 100%;
    }
    .order-details {
      width: 30%;
      min-width: 350px;
      height: 600px;
      background: var(--blue);
      border-radius: 1rem;
    }
</style>