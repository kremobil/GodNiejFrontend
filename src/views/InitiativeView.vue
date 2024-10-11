<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "InitiativeView",
  components: {MainButton}
}
</script>

<template>
<div class="initiative-wrapper">
  <header>
    <h2>Jak przygotować się do ciąży</h2>
    <main-button>Wesprzyj fundację</main-button>
  </header>
</div>
</template>

<style scoped>
.initiative-wrapper {
  width: 100%;
}

header {
  width: 100%;
  height: calc(80px + 4rem + 25rem);
  padding: calc(80px + 4rem + 2rem) 4rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: linear-gradient(to bottom, white 5%, transparent 30%), radial-gradient(ellipse at center, rgba(0,0,0,0.50), transparent), url("@/assets/card_placeholder.jpg") center/cover no-repeat;
}

header h2 {
  font-size: var(--font_xl);
  color: white;
}

header button {
  cursor: pointer;
}
.initiative-wrapper {
  min-height: 100vh;
}
</style>