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
  </div>
</template>

<style scoped>
 .payment-wrapper {
    width: 70%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1rem;
   font-size: var(--font_l);
  }
</style>