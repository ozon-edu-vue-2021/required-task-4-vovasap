<template>
  <label class="input__label">
    {{ label }}
    <select v-model="selected" class="input__input">
      <option
        v-for="option in options"
        :value="option.value"
        :key="`${option.label}_${index}`"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      default: null,
    },
    options: {
      type: Array,
      default: null,
    },
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
