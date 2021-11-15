<template>
  <label class="input__label">
    {{ label }}
    <input
      class="input__input"
      :type="type === 'number' ? 'text' : type"
      v-model="innerValue"
      @input="
        $emit('input', type === 'number' ? Number(innerValue) : innerValue)
      "
    />
  </label>
</template>
<script>
export default {
  name: 'VInput',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'number', 'email', 'date'].includes(value)
      },
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      innerValue: this.value,
    }
  },
}
</script>
