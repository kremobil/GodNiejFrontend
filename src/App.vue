<script>
import NavigationHeader from "@/components/NavigationHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
import godniejBackend from "@/axios/GodniejBackend.js";

export default {
  components: {
    NavigationHeader,
    FooterSection,
  },
  data() {
    return {
      headerData: null,
      footerData: null,
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
  ></NavigationHeader>

  <RouterView />

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
  ></FooterSection>
</template>

<style scoped>

</style>
