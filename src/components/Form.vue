<template>
  <div class="form">
    <PersonalDataForm label="Name" v-model="personalData" />
    <PassportDataForm label="Name" v-model="passportData" />
    <VRadio
      v-model="isChangedName"
      :options="[
        { label: 'Нет', value: false },
        { label: 'Да', value: true },
      ]"
      title="Меняли ли фамилию или имя?"
    />
    <div v-if="isChangedName" class="d-flex">
      <VInput v-model="personalData.prevLastName" label="Фамилия" type="text" />
      <VInput v-model="personalData.prevFirsName" label="Имя" type="text" />
    </div>
  </div>
</template>

<script>
import PersonalDataForm from '@/components/PersonalDataForm.vue'
import PassportDataForm from '@/components/PassportDataForm.vue'
import VRadio from '@/components/VRadio.vue'

export default {
  components: {
    PersonalDataForm,
    PassportDataForm,
    VRadio,
    VInput: () => import('@/components/VInput.vue'),
  },
  data() {
    return {
      personalData: {
        firsName: '',
        lastName: '',
        patronymic: '',
        birthDay: '',
        email: '',
        gender: '',
      },
      passportData: {
        citizenship: null,
        passportSerialNumber: null,
        passportNumber: null,
        passportReleaseDate: '',
        passportReleaseCountry: '',
        passportType: null,
        latinFirstName: '',
        latinLastName: '',
      },
      isChangedName: false,
      prevFirsName: '',
      prevLastName: '',
    }
  },
  methods: {},
  computed: {
    personProfile() {
      return {
        ...this.personalData,
        ...this.passportData,
      }
    },
  },
}
</script>
