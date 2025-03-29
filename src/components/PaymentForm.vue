<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "PaymentForm",
  components: {MainButton},
  props: { paymentRequired: Boolean },
}
</script>

<template>
  <div class="payment-wrapper">
    <h2 v-if="paymentRequired">To już ostatni krok</h2> <h2 v-else>To już ostatni krok</h2>
    <p v-if="paymentRequired">Super Skoro mamy już zebrane wszystkie dane, teraz wystarczy tylko że opłacisz zajęcia i wszystko będzie gotowe. Poniżej znajduje się przycisk do uiszczenia płatności przez Przelewy 24 po kliknięciu ukażą się dostępne metody płatności.</p>
    <p v-else>Zajęcia są darmowe więc nie musisz nic płacić. Zapraszamy!</p>
    <MainButton @click="$emit('paymentCompleted')" type="button" v-if="paymentRequired"><div class="button-text">Zapłać przez <img src="@/assets/Przelewy24_logo.png" alt="Przelewy 24"></div></MainButton>
    <MainButton @click="$emit('paymentCompleted')" type="button" v-else>Zapisz się już teraz</MainButton>
  </div>
</template>

<style scoped>
 .payment-wrapper {
    width: 70%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;
   gap: 2rem;
   font-size: var(--font_l);
  }
 @media screen and (max-width: 1024px) {
   .payment-wrapper {
     width: 100%;
   }
 }

 .button-text {
   display: flex;
   align-items: center;
   gap: 1rem;
 }

 .button-text img {
   height: 2rem;
 }
</style>