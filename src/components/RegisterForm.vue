<script>
import FormGroup from "@/components/FormGroup.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "RegisterForm",
  components: {MainButton, FormGroup},
  data() {
    return {
      formData: {
        name: null,
        surname: null,
        email: null,
        phone: null,
        additionalMessage: null
      }
    }
  }
}
</script>

<template>

  <form @submit.prevent="$emit('formSubmitted', formData)">
    <h2>Zapisz się na zajęcia</h2>
    <div class="form-row">
      <form-group name="Imię" placeholder="Podaj imie" width="100%" v-model="formData.name" required aos-once/>
      <form-group name="Nazwisko" placeholder="Podaj nazwisko" width="100%" v-model="formData.surname" required aos-once/>
    </div>
    <form-group name="Adres e-mail" placeholder="podaj swój mail" width="100%" v-model="formData.email" required aos-once/>
    <form-group name="Numer Telefonu" type="tel" placeholder="Podaj swój numer telefonu" width="100%" v-model="formData.phone" required aos-once/>
    <form-group name="Dodatkowa wiadomość" placeholder="Masz dodatkowe uwagi które chcesz nam przekazać? Śmiało!" text-area width="100%" v-model="formData.additionalMessage" aos-once/>
    <main-button type="submit">Przejdź dalej</main-button>
  </form>
</template>

<style scoped>
  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-size: var(--font_xl);
    color: var(--blue);
  }

  .form-row {
    display: flex;
    gap: 1rem;
  }
  @media screen and (max-width: 1024px) {
    form {
      width: 100%;
    }

  }
  @media screen and (max-width: 764px) {
    .form-row {
      flex-direction: column;
    }
  }
</style>