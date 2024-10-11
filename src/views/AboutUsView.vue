<script>
import AboutFundationSection from "@/components/AboutFundationSection.vue";
import OurTeamSection from "@/components/OurTeamSection.vue";
import godniejBackend from "@/axios/GodniejBackend.js";

export default {
  name: "AboutUsView",
  components: {
    OurTeamSection,
    AboutFundationSection,
  },
  data() {
    return {
      aboutUsData: null,
      teamData: null
    };
  },
  mounted() {
    godniejBackend.get('/about-fundation', {
      params: {
        "populate": "*"
      }
    }).then(response => response.data.data).then((data) => {
      this.aboutUsData = data;
    })

    godniejBackend.get('/out-team', {
      params: {
        "populate": "*"
      }
    }).then(response => response.data.data).then((data) => {
      this.teamData = data;
    })
  }
}
</script>

<template>
  <AboutFundationSection
    :title1="aboutUsData.NaglowekPierwszy"
    :content1="aboutUsData.TekstPierwszy"
    :image1="aboutUsData.ZdjeciePierwsze"
    :button-text="aboutUsData.PrzyciskWesprzyj"
    :title2="aboutUsData.NaglowekDrugi"
    :content2="aboutUsData.TekstDrugi"
    :image2="aboutUsData.ZdjecieDrugie"
    v-if="aboutUsData"
  ></AboutFundationSection>
  <OurTeamSection
    :title="teamData.Naglowek"
    :card1-title="teamData.Karta1Tytul"
    :card1-text="teamData.Karta1Opis"
    :card1-image="teamData.Karta1Zdjecie"
    :card2-title="teamData.Karta2Tytul"
    :card2-text="teamData.Karta2Opis"
    :card2-image="teamData.Karta2Zdjecie"
    :card3-title="teamData.Karta3Tytul"
    :card3-text="teamData.Karta3Opis"
    :card3-image="teamData.Karta3Zdjecie"
    v-if="teamData"
  ></OurTeamSection>
</template>

<style scoped>

</style>