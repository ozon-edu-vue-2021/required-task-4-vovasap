<template>
  <div>
    <p class="radio__title">{{ title }}</p>
    <div class="radio__container">
      <label
        v-for="(option, index) in options"
        class="radio__label"
        :key="`${option.label}_${index}`"
      >
        <input
          v-model="innerValue"
          class="radio__input"
          type="radio"
          :value="option.value"
          @change="$emit('input', innerValue)"
        />
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VRadio',
  props: {
    title: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Boolean],
      default: null,
    },
    options: {
      type: Array,
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
