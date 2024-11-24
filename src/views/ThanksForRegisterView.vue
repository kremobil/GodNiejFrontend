<script setup>

import MainLink from "@/components/MainLink.vue";
</script>

<template>
<div id="thanks-for-register-wrapper">
  <div class="succes-info">
    <h1>Pomyślnie zapisano na zajęcia!</h1>
    <svg xmlns="http://www.w3.org/2000/svg" height="96px" viewBox="0 -960 960 960" width="96px" fill="#02bc7d"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
  </div>
  <h2>Dziękujemy za zapis i do zobacznia na miejscu😊</h2>
  <h3>Szczegółowe informacje podeślemy mailem😉</h3>
  <main-link to="/">Powrót na stronę główną</main-link>
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
  justify-content: center;
}

@media screen and (max-width: 768px) {
  #thanks-for-register-wrapper {
    margin-top: calc(60px + 2rem);
  }
}

h1 {
  font-size: var(--font_xl);
  color: var(--blue);
  text-align: left;
}
h2 {
  font-size: var(--font_xl);
  color: var(--blue);
  text-align: center;
  max-width: 1264px;
}
h3 {
  font-size: var(--font_l);
  color: var(--blue);
  text-align: center;
  max-width: 1264px;
}
.succes-info {
  display: flex;
  padding: 2rem 4rem;
  gap: 2rem;
  align-items: center;
  background: white;
  box-shadow: rgba(31, 39, 89, 0.5) 4px 4px 10px;
  border-radius: 1rem;
  max-width: 1264px;
}
@media screen and (max-width: 768px) {
  .succes-info {
    padding: 2rem;
  }
}
</style>