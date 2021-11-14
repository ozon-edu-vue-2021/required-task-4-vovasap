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
  name: "VRadio",
  props: {
    title: {
      type: String,
      default: null
    },
    value: {
      type: [String, Boolean],
    },
    options: {
      type: Array,
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
.radio__container {
  display: flex;
  gap: 5px;
}
.radio__title {
  margin: 0 0 5px 0;
  font-size: 14px;
  font-weight: 700;
  color: #575757;
}
.radio__input {
  position: absolute;
  margin: 0;
  opacity: 0;
  z-index: -1;
}
.radio__label {
  position: relative;
  display: flex;
  margin-bottom: 5px;
  padding-left: 17px;
  padding-right: 10px;
  font-size: 12px;
}
.radio__label:last-child {
  padding-right: 0;
}
.radio__input + span::before {
  content: "";
  position: absolute;
  left: 0;
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border: 2px solid #9b9b9b;
  border-radius: 4px;
}
.radio__input + span:active::before {
  border: 2px solid #bebebe;
}
.radio__input:checked + span::before {
  border: 2px solid #87cefa;
  background: #87cefa;
}
</style>