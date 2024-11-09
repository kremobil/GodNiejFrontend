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
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    required: {
      type: Boolean,
      default: false,
    },
    aosOnce: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      phoneValue: ['_', '_', '_', '_', '_', '_', '_', '_', '_']
    }
  },
  emits: ['update:modelValue'],
  methods: {
    handlePhoneInput(e) {

      console.log(e.key)
      if (e.key !== 'Enter' && e.key !== 'Tab') {
        e.preventDefault();
      }
      if (e.key in ['0','1','2','3','4','5','6','7','8','9']) {
        this.phoneValue[this.phoneValue.indexOf('_')] = e.key;
      } else if (e.key === 'Backspace' && (this.phoneValue.indexOf('_') > 0 || this.phoneValue.indexOf('_') === -1)) {
        if (this.phoneValue.indexOf('_') !== -1) {
          this.phoneValue[this.phoneValue.indexOf('_') - 1] = '_';
        } else {
          this.phoneValue[this.phoneValue.length - 1] = '_';
        }
      }

      this.$emit('update:modelValue', this.phoneValue.filter(digit => digit !== '_').join(''));
      this.setCursorPosition(e);
    },
    setCursorPosition(e) {
      e.target.setSelectionRange(e.target.value.indexOf('_'), e.target.value.indexOf('_'))
    }
  }
}
</script>

<template>
  <div class="form_group" :style="{
    width: width,
  }">
    <label :for="name" data-aos="fade-up" :data-aos-once="aosOnce">{{ label ? label : name }}</label>
    <textarea :id="name" :name="name" :placeholder="placeholder ? placeholder : `podaj ${label}`" v-if="textArea" rows="5" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :required="required" data-aos="zoom-in-up" :data-aos-once="aosOnce"></textarea>
    <input type="tel" @input="setCursorPosition" @keyup="setCursorPosition" @select.prevent="setCursorPosition" @click.prevent="setCursorPosition" :id="name" :name="name" pattern="\d\d\d-\d\d\d-\d\d\d" :placeholder="placeholder ? placeholder : `podaj ${label}`" @keydown="handlePhoneInput" :required="required" v-else-if="type==='tel'" :value="`${phoneValue.slice(0,3).join('')}-${phoneValue.slice(3,6).join('')}-${phoneValue.slice(6,9).join('')}`" data-aos="zoom-in-up" :data-aos-once="aosOnce">
    <input :type="type" :id="name" :name="name" :placeholder="placeholder ? placeholder : `podaj ${label}`" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :required="required" data-aos="zoom-in-up" :data-aos-once="aosOnce" v-else>
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