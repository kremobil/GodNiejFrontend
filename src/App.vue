<script>
import NavigationHeader from "@/components/NavigationHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import godniejBackend from "@/axios/GodniejBackend.js";
import SupportPopup from "./components/SupportPopup.vue";

export default {
  components: {
    NavigationHeader,
    FooterSection,
    SupportPopup
  },
  data() {
    return {
      headerData: null,
      footerData: null,
      popupActive: false
    }
  },
  mounted() {

    godniejBackend.get('/footer', {
      params: {
        "populate": "Logo"
      }
    }).then(
        response => response.data.data
    ).then(
        (data) => {
          console.log(data);

          this.footerData = data;
        }
    )

    godniejBackend.get('/header', {
      params: {
        "populate": "Logo"
      }
    }).then(
        response => response.data.data
    ).then(
        (data) => {
          this.headerData = data;
        }
    )
  }
}

</script>

<template>
  <NavigationHeader
    :logo="footerData.Logo"
    :support-button="headerData.PrzyciskWesprzyj"
    :facebook-link="headerData.LinkFacebook"
    :instagram-link="headerData.LinkInstagram"
    v-if="headerData"
    @open-popup="popupActive = true"
  ></NavigationHeader>
  
  <RouterView @open-popup="popupActive = true"/>
  

  <FooterSection
    :logo="footerData.Logo"
    :foundation-name="footerData.NazwaFundacji"
    :email="footerData.Email"
    :street="footerData.Ulica"
    :city="footerData.Miejscowosc"
    :instagram-link="footerData.LinkInstagram"
    :facebook-link="footerData.LinkFacebook"
    :krs="footerData.KRS"
    :nip="footerData.NIP"
    :social-header="footerData.NaglowekSocialMediow"
    :support-header="footerData.NaglowekWesprzyj"
    :thank-you-message="footerData.Podziekowanie"
    :bank-number="footerData.NumerKonta"
    :support-button="footerData.PrzyciskWesprzyj"
    v-if="footerData"
    @open-popup="popupActive = true"
  ></FooterSection>

  <teleport to='body'>
    <SupportPopup :active="popupActive" @close-popup="popupActive = false"/>
  </teleport>
</template>

<style scoped>

</style>
