<template lang="html">
    <main id="workshops-registration-wrapper" v-if="content">
        <div class="progress-bar">
          <div class="progress-line" :style="{
            width: `${this.progressbar}%`
          }"></div>
          <div class="progress-dot" :style="{
            background: 'var(--magenta)',
            outline: 'var(--magenta) 6px solid'
          }">
            <h3>{{ content.TytulEtap1 }}</h3>
          </div>
          <div class="progress-dot" :style="{
            background: this.progressbar >= 50 ? 'var(--magenta)' : 'var(--blue)',
            outline: (this.progressbar >= 50 ? 'var(--magenta)' : 'var(--blue)') + ' 6px solid'
          }">
            <h3>{{ content.TytulEtap2 }}</h3>
          </div>
          <div class="progress-dot" :style="{
            background: this.progressbar === 100 ? 'var(--magenta)' : 'var(--blue)',
            outline: (this.progressbar === 100 ? 'var(--magenta)' : 'var(--blue)') + ' 6px solid'
          }">
            <h3>{{ content.TytulEtap3 }}</h3>
          </div>
        </div>
        <div class="content">
          <keep-alive>
            <component :is="currentComponent" @form-submitted="handleFormSubmit" @payment-completed="handlePaymentCompleted" :paymentRequired="initiative.Cena > 0"></component>
          </keep-alive>
          <div class="order-details" v-if="initiative">
            <img :src="`https://backend.godniej.org${initiative.Zdjecie.url}`" :alt="initiative.Zdjecie.alternativeText">
            <div class="informations" >
              <h2 >{{ initiative.Tytul }}</h2>
              <h3>Cena: {{ initiative.NiestandardowaCena ? initiative.NiestandardowaCena : initiative.Cena > 0 ? initiative.Cena.toFixed(2) + "zł" : "Darmowe!" }}</h3>
              <h3>Data:
                {{ initiative.TerminZajec }}
                </h3>
              <h3 v-if="initiative.MiejsceZajec">Miejsce:
                {{ initiative.MiejsceZajec }}
                </h3>
              <h3>Wolne miejsca: {{availableSpots}}</h3>

              <main-link :to="`/inicjatywy/${this.$route.params.slug}`" style="background-color: var(--magenta);" v-if="currentComponent === 'register-form'">{{ content.PrzyciskPowrotDoPosta }}</main-link>
              <main-button style="background-color: var(--magenta);" @click="goBackToRegisterForm" v-else>{{ content.PrzyciskPowrotDoFormularza }}</main-button>
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
import router from "@/router/index.js";

export default {
  components: {MainLink, MainButton, RegisterForm, PaymentForm},
  data() {
    return {
      currentComponent: "register-form",
      initiative: null,
      progressbar: 50,
      subbmitedForm: null,
      content: null,
      availableSpots: 0,
    }
  },
  mounted() {
    godniejBackend.get('/posts', {
      params: {
        "filters[slug][$eq]": this.$route.params.slug,
        "populate": "*"
      }
    }).then(response => response.data.data).then(data => {
      if (!data[0].WlaczZapisy) {
        router.push(`/inicjatywy/${data[0].slug}`)
      } else {
        godniejBackend.get(`/signups-status/${data[0].slug}`).then(response => response.data).then(data => {
          this.availableSpots = data.availableSpots;
        }).catch(error => {
          router.push(`/inicjatywy/${data[0].slug}`)
        })
      }

      const MONTHS = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]

      const date = new Date(data[0].TerminZajec)
      const dateString = data[0].DataDoUstalenia ?
          "do ustalenia" :
          `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0') }: ${String(date.getMinutes()).padStart(2, '0')}`


      this.initiative = {
        ...data[0],
        KoniecZapisow: new Date(data[0].KoniecZapisow),
        TerminZajec: dateString
      };
    })

    godniejBackend.get('/initiative-sign-up').then(response => response.data.data).then(data => {
      console.log(data);
      // #TODO: get titles from api
      this.content = data;
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
    },
    handlePaymentCompleted() {
      godniejBackend.post('/initiatives-sing-ups', {
        data: {
          Imie: this.subbmitedForm.name,
          Nazwisko: this.subbmitedForm.surname,
          Email: this.subbmitedForm.email,
          Telefon: this.subbmitedForm.phone,
          Wiadomosc: this.subbmitedForm.additionalMessage,
          zajecia: {
            connect: [this.initiative.documentId]
          }
        }
      }).then(
          (response) => {
            if (response?.data?.transactionUrl) {
              window.location.href = response.data.transactionUrl;
            }
          }
      ).catch(error => {
        alert(error.response.data.message)
      })
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
    .order-details .informations {
      display: flex;
      flex-direction: column;
      height: fit-content;
      gap: 1rem;
      justify-content: space-between;
    }
    .order-details {
      width: 30%;
      min-width: 300px;
      height: fit-content;
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
      max-height: 300px;
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
      }
    }
    @media screen and (max-width: 1024px) and (min-width: 512px) {

      .order-details {
        height: fit-content;
        margin-bottom: 2rem;
        flex-direction: row;
        gap:2rem;
        align-items: center;
      }
      .order-details img {
        height: 200px;
        margin-bottom: 0;
      }
      .order-details .informations {
        min-height: 200px;
      }

      .order-details .main_link {
        padding: 1rem;
      }
    }
    .informations {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media screen and (max-width: 512px) {
      .order-details {
        min-width: auto;
        gap: 1rem ;
      }
      .order-details img {
        width: max(100%, 200px);
      }
      .order-details .main_link {
        padding: 0.5rem 1rem;
      }
    }
</style>