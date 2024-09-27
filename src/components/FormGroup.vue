<script>
export default {
  name: "FormGroup",
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '100%'
    },
    label: {
      type: String,
      default: false
    },
    textArea: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<template>
  <div class="form_group" :style="{
    width: width,
  }">
    <label :for="name">{{ label ? label : name }}</label>
    <textarea :id="name" :name="name" :placeholder="placeholder ? placeholder : `podaj ${label}`" v-if="textArea" rows="5"></textarea>
    <input :type="type" :id="name" :name="name" :placeholder="placeholder ? placeholder : `podaj ${label}`" v-else>
  </div>
</template>

<style scoped>
.form_group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form_group label {
  font-size: var(--font_l);
  font-weight: 600;
  color: var(--blue);
}
.form_group input, .form_group textarea {
  padding: 0.5rem 1rem;
  font-size: var(--font_m);
  border: 2px solid var(--blue);
  border-radius: 30px;
  color: var(--blue);
  resize: vertical;
}
</style>