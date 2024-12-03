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
    <h2 v-if="paymentRequired">Przepraszamy za niedogodności</h2> <h2 v-else>To już ostatni krok</h2>
    <p v-if="paymentRequired">Wciąż pracujemy nad implementacją bramki płatności na naszą stronę. Obecnie możliwy jest zapis poprzez dokonanie przelewu na nasz numer konta 38 1020 1462 0000 7002 0446 4285 tytułem „Darowizna na cele statutowe + imię i nazwisko + nazwa warsztatu"</p>
    <p v-else>Zajęcia są darmowe więc nie musisz nic płacić. Zapraszamy!</p>
    <MainButton @click="$emit('paymentCompleted')" type="button">Zapisz się!</MainButton>
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
   gap: 1rem;
   font-size: var(--font_l);
  }
 @media screen and (max-width: 1024px) {
   .payment-wrapper {
     width: 100%;
   }
 }
</style>