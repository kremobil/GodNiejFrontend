<script>
import HeroSection from "@/components/HeroSection.vue";
import InitativesSection from "@/components/InitativesSection.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";
import ContactUsSection from "@/components/ContactUsSection.vue";
import godniejBackend from "@/axios/GodniejBackend.js";
export default {
  name: "HomeView",
  components: {ContactUsSection, AboutUsSection, InitativesSection, HeroSection},
  data() {
    return {
      heroData: null,
      initiativesData: null,
      aboutUsData: null,
      contactUsData: null,
    }
  },
  mounted() {
    godniejBackend.get('/hero-section', {
      params: {
        populate: "Sponsorzy"
      }
    }).then(
        (response) => {
          this.heroData = {
            title: response.data.data.Naglowek,
            description: response.data.data.Opis,
            mainButton: response.data.data.PrzyciskGlowny,
            secoundaryButton: response.data.data.PrzyciskDodatkowy,
            sponsorsTitle: response.data.data.NaglowekSponsorow,
            sponsors: response.data.data.Sponsorzy
          };
        }
    )

    godniejBackend.get('/initiatives-section', {
      params: {
        "populate[0]": "WyroznionyPost",
        "populate[1]": "WyroznionyPost.Zdjecie",
      }
    }).then(
        (response) => {
          godniejBackend.get('/posts', {
            params: {
              populate: "Zdjecie",
              "pagination[pageSize]": 4,
              "sort": "publishedAt:desc"
            }
          }).then(
              (posts) => {
                this.initiativesData = {
                  otherPosts: posts.data.data,
                  title: response.data.data.Tytul,
                  button: response.data.data.Przycisk,
                  highlightedPost: response.data.data.WyroznionyPost
                };
              }
          )
        }
    )

    godniejBackend.get('/about-us-home-page', {
      params: {
        "populate[0]": "Komentarze",
        "populate[1]": "Komentarze.Zdjecie",
      }
    }).then(
        (response) => {
          this.aboutUsData = {
            title: response.data.data.Naglowek,
            description: response.data.data.Opis,
            button: response.data.data.PrzyciskGlowny,
            reviewsHeader: response.data.data.NaglowekOpinie,
            reviews: response.data.data.Komentarze
          };
        }
    )

    godniejBackend.get('/contact-form').then(
        (response) => {
          this.contactUsData = {
            title: response.data.data.Naglowek,
            subtitle: response.data.data.PodTytul,
            emailLabel: response.data.data.EmailEtykieta,
            emailPlaceholder: response.data.data.EmailPole,
            nameLabel: response.data.data.ImieEtykieta,
            namePlaceholder: response.data.data.ImiePole,
            surnameLabel: response.data.data.NazwiskoEtykieta,
            surnamePlaceholder: response.data.data.NazwiskoPole,
            messageLabel: response.data.data.WiadomoscEtykieta,
            messagePlaceholder: response.data.data.WiadomoscPole,
            button: response.data.data.WyslijFormularz
          };
        }
    )
  }
}
</script>

<template>
  <main v-if="aboutUsData && initiativesData && heroData && contactUsData">
    <hero-section
        :description="heroData.description"
        :title="heroData.title"
        :main-button="heroData.mainButton"
        :secoundary-button="heroData.secoundaryButton"
        :sponsors="heroData.sponsors"
        :sponsors-title="heroData.sponsorsTitle"
    ></hero-section>
    <initatives-section
        :button="initiativesData.button"
        :highlighted-post="initiativesData.highlightedPost"
        :other-posts="initiativesData.otherPosts"
        :title="initiativesData.title"
    ></initatives-section>
    <about-us-section
      :title="aboutUsData.title"
      :button="aboutUsData.button"
      :description="aboutUsData.description"
      :reviews-header="aboutUsData.reviewsHeader"
      :reviews="aboutUsData.reviews"
    ></about-us-section>
    <contact-us-section
      :title="contactUsData.title"
      :subtitle="contactUsData.subtitle"
      :email-label="contactUsData.emailLabel"
      :email-placeholder="contactUsData.emailPlaceholder"
      :name-label="contactUsData.nameLabel"
      :name-placeholder="contactUsData.namePlaceholder"
      :surname-label="contactUsData.surnameLabel"
      :surname-placeholder="contactUsData.surnamePlaceholder"
      :message-label="contactUsData.messageLabel"
      :message-placeholder="contactUsData.messagePlaceholder"
      :button="contactUsData.button"
    ></contact-us-section>
  </main>
  <main class="loading" v-else>
    <svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" height="48px" viewBox="0 -960 960 960" width="48px" fill="var(--blue)"><path d="M167-160v-60h130l-15-12q-64-51-93-111t-29-134q0-106 62.5-190.5T387-784v62q-75 29-121 96.5T220-477q0 63 23.5 109.5T307-287l30 21v-124h60v230H167Zm407-15v-63q76-29 121-96.5T740-483q0-48-23.5-97.5T655-668l-29-26v124h-60v-230h230v60H665l15 14q60 56 90 120t30 123q0 106-62 191T574-175Z"/></svg>
    <h2>Trwa ładowanie...</h2>
  </main>
</template>

<style>
  .loading {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
    flex-direction: column;
    gap: 2rem;
  }
  .loading-icon {
    transform-origin: center;
    animation: spin 2s linear infinite reverse;
  }

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    } to {
      transform: rotateZ(360deg);
    }
  }
</style>