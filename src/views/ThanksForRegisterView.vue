<script setup>

</script>

<template>
<div id="thanks-for-register-wrapper">
  <h1>Pomyślnie zpisano na zajęcia!</h1>
  <h2>Dziękujemy za zapis i do zobacznia na miejscu😊</h2>
  <h3>Szczegółowe informacje podeślemy mailem</h3>
</div>
</template>

<style scoped>
#thanks-for-register-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: calc(80px + 2rem);
}

@media screen and (max-width: 768px) {
  #thanks-for-register-wrapper {
    margin-top: calc(60px + 2rem);
  }
}

h1 {
  font-size: var(--font_xxl);
  color: var(--blue);
  text-align: center;
}
h2 {
  font-size: var(--font_xl);
  color: var(--blue);
  text-align: center;
}
h3 {
  font-size: var(--font_l);
  color: var(--blue);
  text-align: center;
}
</style>