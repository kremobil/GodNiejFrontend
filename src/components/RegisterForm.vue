<script>
import FormGroup from "@/components/FormGroup.vue";

export default {
  name: "RegisterForm",
  components: {FormGroup}
}
</script>

<template>

  <form action="">
    <h2>Zapisz się na zajęcia</h2>
    <div class="form-row">
      <form-group name="Imię" placeholder="Podaj imie" width="50%"/>
      <form-group name="Nazwisko" placeholder="Podaj imie" width="50%"/>
    </div>
    <form-group name="Adres e-mail" placeholder="Adres e-mail" width="100%"/>
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
</style>