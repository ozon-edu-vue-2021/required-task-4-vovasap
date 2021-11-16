<template>
  <label class="input__label" :class="{'error': rule && !isValidated}">
    {{ label }}
    <input
      class="input__input"
      :type="type === 'number' ? 'text' : type"
      :value="innerValue"
      @input="inputHandle"
    />
  </label>
</template>
<script>
import * as validation from '@/utils/validation.js'

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
    rule: {
      type: String,
      default: null,
      validator: (value) => {
        const rules = value.split('|')
        return rules.every(rule => {
          if (/^(min|max)(:)\d$/.test(rule)) {
            return true
          } else {
            return ['russian', 'latin', 'date', 'email', 'number'].includes(rule)
          }
        })
      },
    },
  },
  data() {
    return {
      isValidated: true,
      innerValue: this.value,
    }
  },
  methods: {
    inputHandle(e) {
      this.innerValue = e.target.value
      if (this.rule) {
        const rules = this.rule.split('|')
         this.isValidated = rules.every(rule => {
          if (rule === 'date') {
            return new Date(e.target.value) <= Date.now() 
          } else if (/^(min|max)(:)\d$/.test(rule)) {
            if (rule.slice(0,3) === 'min') {
              return e.target.value.length <= Number(rule.slice(4,5))
            } else {
              return e.target.value.length >= Number(rule.slice(4,5))
            }
          } else {
            return validation[rule].test(e.target.value)
          }
         })
      }
      if (this.isValidated) {
        this.$emit('input', this.type === 'number' ? Number(this.innerValue) : this.innerValue)
        this.innerValue = e.target.value
      } else {
        this.$emit('input', null)
      }
    }
  }
}
</script>