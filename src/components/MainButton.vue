<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
      required: false
    },
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
<button :type="type" @click="$emit('click')" :class="secondary ? 'secondary' : 'primary'">
  <slot></slot>
</button>
</template>

<style scoped>
  button {
    color: white;
    border-radius: 100px;
    font-size: var(--font_l);
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    padding: 1rem 2rem;
  }
  .primary {
    background-color: var(--blue);
    border: none;
  }

  .secondary {
    background-color: white;
    border: 3px solid var(--blue);
    color: var(--blue);
  }
</style>