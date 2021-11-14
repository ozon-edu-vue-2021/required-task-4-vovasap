<template>
  <div class="form">
    <PersonalDataForm label="Name" v-model="personalData" />
    <PassportDataForm label="Name" v-model="passportData" />
  </div>
</template>

<script>
import PersonalDataForm from '@/components/PersonalDataForm.vue'
import PassportDataForm from '@/components/PassportDataForm.vue'

export default {
  components: {
    PersonalDataForm,
    PassportDataForm,
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
