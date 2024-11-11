<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "PaymentForm",
  components: {MainButton}
}
</script>

<template>
  <div class="payment-wrapper">
    <h2>Formularz płatności przelewy 24</h2>
    <MainButton @click="$emit('paymentCompleted')" type="button">Zapłać</MainButton>
<!--    #TODO: Dodać informację o dodawaniu płatności i prośbę o płatność na miejscu-->
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