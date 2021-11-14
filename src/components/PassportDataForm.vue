<template>
  <VFormGroup title="Паспортные данные">
    <VSelect
      v-model="passportData.citizenship"
      :options="citizenshipsOptions"
      label="Гражданство"
    />
    <div v-if="isRussian || !passportData.citizenship" class="d-flex">
      <VInput
        v-model="passportData.passportSerialNumber"
        label="Серия паспорта"
        type="number"
      />
      <VInput
        v-model="passportData.passportNumber"
        label="Номер паспорта"
        type="number"
      />
      <VInput
        v-model="passportData.passportReleaseDate"
        label="Дата рождения"
        type="date"
      />
    </div>
    <template v-else>
      <div class="d-flex">
        <VInput
          v-model="passportData.latinLastName"
          label="Фамилия на латинице"
          type="text"
        />
        <VInput
          v-model="passportData.latinFirstName"
          label="Имя на латинице"
          type="text"
        />
      </div>
      <p class="footnote">
        Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan.
      </p>
      <div class="d-flex">
        <VInput
          v-model="passportData.passportNumber"
          label="Номер паспорта"
          type="number"
        />
        <VSelect
          v-model="passportData.passportReleaseCountry"
          :options="passportReleaseCountryOptions"
          label="Страна выдачи"
        />
        <VSelect
          v-model="passportData.passportType"
          :options="passportTypesOptions"
          label="Тип паспорта"
        />
      </div>
    </template>
  </VFormGroup>
</template>
<script>
import VInput from '@/components/VInput.vue'
import VSelect from '@/components/VSelect.vue'
import VFormGroup from '@/components/VFormGroup.vue'
import citizenships from '@/assets/data/citizenships.json'
import passportTypes from '@/assets/data/passport-types.json'

export default {
  components: {
    VInput,
    VFormGroup,
    VSelect,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      citizenshipsOptions: null,
      passportReleaseCountryOptions: null,
      passportTypesOptions: null,
    }
  },
  computed: {
    passportData: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    isRussian() {
      return this.value?.citizenship?.nationality === 'Russia'
    },
  },
  created() {
    this.citizenshipsOptions = citizenships.map((citizenship) => ({
      label: citizenship.nationality,
      value: citizenship,
    }))
    this.passportReleaseCountryOptions = citizenships.map((citizenship) => ({
      label: citizenship.flag,
      value: citizenship.flag,
    }))
    this.passportTypesOptions = passportTypes.map((passportType) => ({
      label: passportType.type,
      value: passportType,
    }))
  },
}
</script>
