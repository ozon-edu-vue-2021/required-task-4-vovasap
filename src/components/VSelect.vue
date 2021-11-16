<template>
  <div class="select-container" :class="`select_${_uid}`">
    <label class="input__label">
      {{ label }}
      <input
        class="input__input"
        :value="selected"
        @input="throttledSearch($event.target.value)"
        @focus="isOpened = true"
      />
    </label>
    <ul v-if="isOpened" class="select__options-group">
      <li
        v-for="(option, index) in innerOptions"
        class="select__option"
        @click="selectItem(option)"
        :key="`${option.label}_${index}`"
      >{{ option.label }}</li>
    </ul>
  </div>
</template>
<script>
import throttle from '@/utils/throttle.js'
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [Object, String],
      default: null,
    },
    options: {
      type: Array,
      default: null,
    },
    isFlags: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isOpened: false,
      selected: '',
      innerOptions: [],
      throttledSearch: null,
    }
  },
  methods: {
    selectItem(option) {   
      this.selected = option.label
      this.$emit('input', option.value)
      this.isOpened = false 
    },
    clickHandle(e) {
      if(!e.target.closest(`.select_${this._uid}`)){
        this.isOpened = false
      }
    },
    search(selected) {      
      this.selected = selected
       if (!selected) {
         this.innerOptions = this.options
      } else if (this.isFlags && /^[a-z]{2}$/i.test(selected)) {
        const codePoints = [...selected.toUpperCase()].map(c => c.codePointAt() + 127397);
        const flag = String.fromCodePoint(...codePoints)
         this.innerOptions = [this.options.find(option => option.label === flag)]
         this.selected = flag
      } else {
      this.innerOptions = this.options.filter(option => 
        option.label.toLowerCase().includes(this.selected.toLowerCase())
      )}
      if (this.options.some(option => option.label === this.selected)) {
        this.$emit('input', this.innerOptions[0].value)
      }
    }
  },
  created() {
    this.innerOptions = this.options
    this.throttledSearch = throttle(this.search, 1000)
    document.addEventListener('click', this.clickHandle)
  },
  destroyed() {
    document.removeEventListener('click', this.clickHandle)
  }
}
</script>