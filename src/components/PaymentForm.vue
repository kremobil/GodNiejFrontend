<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "PaymentForm",
  components: {MainButton}
}
</script>

<template>
  <div class="payment-wrapper">
    <h2>Przepraszamy za niedogodności</h2>
    <p>Wciąż pracujemy nad implementacją Bramki płatności na naszą stronę. Obecnie możliwy jest więc zapis bez dokonania płatnościa pamiętaj jednak żeby zapłacić na zajęciach bądź zrobić przelew na nasz numer konta (30 1020 1462 0000 7002 0446 4285) z tytułem "Na cele statutowe fundacji. (twoje imię, twoje nazwisko)"</p>
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