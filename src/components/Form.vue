<template>
  <div class="form">
    <PersonalDataForm label="Name" v-model="personalData" />
  </div>
</template>

<script>
import PersonalDataForm from '@/components/PersonalDataForm.vue'

export default {
  components: {
    PersonalDataForm,
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
    }
  },
  methods: {},
  computed: {
    personProfile() {
      return {
        ...this.personalData,
      }
    },
  },
}
</script>
