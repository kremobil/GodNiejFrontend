<script>
export default {
  props: {
    to: {
      type: String,
      default: 'button',
      required: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    anchor: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<template>
  <router-link :type="type" @click="$emit('click')" :class="secondary ? 'secondary' : 'primary'" :to="to" class="main_link" v-if="!anchor">
    <slot></slot>
  </router-link>
  <a v-else :href="to" :class="secondary ? 'secondary' : 'primary'" class="main_link" @click="$emit('click')" target="_blank">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  color: white;
  border-radius: 100px;
  font-size: var(--font_l);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
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