<template>
  <fieldset class="group__fieldset">
    <legend class="group__title">{{ title }}</legend>
    <slot />
  </fieldset>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    }
  }
}
</script>
<style>
.group__fieldset {
  margin-bottom: 10px;
  padding: 0;
  border: 0;
}
.group__title {
  margin-bottom: 10px;
  color: #575757;
  font-weight: 700;
}
</style>