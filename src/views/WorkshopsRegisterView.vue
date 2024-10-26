<template lang="html">
    <main id="workshops-registration-wrapper">
        <div class="progress-bar">
          <div class="progress-line" :style="{
            width: `${this.progressbar}%`
          }"></div>
          <div class="progress-dot" :style="{
            background: 'var(--magenta)',
            outline: 'var(--magenta) 6px solid'
          }">
            <h3>Wybierz zajęcia</h3>
          </div>
          <div class="progress-dot" :style="{
            background: this.progressbar >= 50 ? 'var(--magenta)' : 'var(--blue)',
            outline: (this.progressbar >= 50 ? 'var(--magenta)' : 'var(--blue)') + ' 6px solid'
          }">
            <h3>Wypełnij formularz</h3>
          </div>
          <div class="progress-dot" :style="{
            background: this.progressbar === 100 ? 'var(--magenta)' : 'var(--blue)',
            outline: (this.progressbar === 100 ? 'var(--magenta)' : 'var(--blue)') + ' 6px solid'
          }">
            <h3>Opłać zajęcia</h3>
          </div>
        </div>
        <div class="content">
          <keep-alive>
            <component :is="currentComponent" @form-submitted="handleFormSubmit"></component>
          </keep-alive>
          <div class="order-details" v-if="initiative">
            <img :src="`http://localhost:1337${initiative.Zdjecie.url}`" :alt="initiative.Zdjecie.alternativeText">
            <div class="informations">
              <h2>{{ initiative.Tytul }}</h2>
              <h3>Cena: 60zł</h3>
              <h3>Data: 28.10.2024</h3>

              <main-link :to="`/inicjatywy/${this.$route.params.slug}`" style="background-color: var(--magenta);" v-if="currentComponent === 'register-form'">Powróć do posta</main-link>
              <main-button style="background-color: var(--magenta);" @click="goBackToRegisterForm" v-else>Powróć do formularza</main-button>
            </div>
          </div>
        </div>
    </main>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";
import godniejBackend from "@/axios/GodniejBackend.js";
import MainButton from "@/components/MainButton.vue";
import MainLink from "@/components/MainLink.vue";
import PaymentForm from "@/components/PaymentForm.vue";

export default {
  components: {MainLink, MainButton, RegisterForm, PaymentForm},
  data() {
    return {
      currentComponent: "register-form",
      initiative: null,
      progressbar: 50,
      subbmitedForm: null
    }
  },
  mounted() {
    godniejBackend.get('/posts', {
      params: {
        "filters[slug][$eq]": this.$route.params.slug,
        "populate": "*"
      }
    }).then(response => response.data.data).then(data => {
      console.log(data);
      this.initiative = data[0];
    })

    godniejBackend.get('/initiative-sign-up').then(response => response.data.data).then(data => {
      console.log(data);
    })
  },
  methods: {
    handleFormSubmit(formData) {
      // Send form data to the backend
      this.subbmitedForm = formData;
      // Update progress bar
      this.updateProgressBar(100);
      // Change component to payment form
      this.currentComponent = "payment-form";
    },
    updateProgressBar(newProgress) {
      this.progressbar = newProgress;
    },
    goBackToRegisterForm() {
      this.updateProgressBar(50);
      this.currentComponent = "register-form";
    }
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
      position: relative;
      transition: background 0.5s 0.5s ease-in-out, outline 0.5s 0.5s ease-in-out;
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
    component {
      width: 70%;
    }
    .progress-line {
      height: 100%;
      left: 0;
      top: 0;
      background: var(--magenta);
      position: absolute;
      transition: width 0.5s ease-in-out;
    }
    .content {
      display: flex;
      gap: 1rem;
      width: 100%;
    }
    .order-details {
      width: 30%;
      min-width: 350px;
      background: var(--blue);
      border-radius: 1rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .order-details img {
      width: 100%;
      object-fit: cover;
      height: 300px;
      border-radius: 1rem;
      margin-bottom: 2rem;
    }
    .order-details h2 {
      font-size: var(--font_l);
      color: var(--magenta);
    }
    .order-details h3 {
      font-size: var(--font_m);
      color: #ffffff;
    }
    @media screen and (max-width: 1024px) {
      .content {
        flex-direction: column-reverse;
      }
      .order-details {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
        flex-direction: row;
      }
      .order-details img {
        width: 350px;
        height: auto;
      }
    }

    .informations {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
</style>