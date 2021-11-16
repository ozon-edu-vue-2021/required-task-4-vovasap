<template>
  <fieldset class="form-group__fieldset">
    <legend class="form-group__title">{{ title }}</legend>
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