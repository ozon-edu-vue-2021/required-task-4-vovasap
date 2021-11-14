<template>
  <label class="input__label">
    {{ label }}
    <input
      class="input__input"
      :type="type"
      v-model="innerValue"
      @input="$emit('input', innerValue)"
    />
  </label>
</template>
<script>
export default {
  name: "VInput",
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'number', 'email', 'date'].includes(value)
      }
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      innerValue: this.value
    }
  },
}
</script>
<style>
.input__input {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
}
.input__label {
  display: block;
  padding: 4px;
  width: 100%;
  height: 38px;
  border: 1px solid #9b9b9b;
  border-radius: 3px;
  color: #9b9b9b;
  font-size: 10px;
  transition: all 0.2s ease-out;
  margin-bottom: 5px;
}
.input__label:focus-within {
  border: 1px solid #bebebe;
  color: #bebebe;
}
</style>