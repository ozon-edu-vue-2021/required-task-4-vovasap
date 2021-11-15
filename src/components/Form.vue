<template>
  <form class="form" @submit.prevent="sendData">
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
      <VInput v-model="prevLastName" label="Фамилия" type="text" />
      <VInput v-model="prevFirstName" label="Имя" type="text" />
    </div>
    <input class="button__input" value="Отправить" type="submit" />
  </form>
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
      prevFirstName: '',
      prevLastName: '',
    }
  },
  methods: {
    sendData() {
      let passportData = null
      let changedName = null
      if(this.passportData.citizenship === 'Russia' || this.passportData.citizenship === null) {
        passportData = {
          passportSerialNumber: this.passportData.passportSerialNumber,
          passportReleaseDate: this.passportData.passportReleaseDate,
        }
      } else {
        passportData = {
          passportReleaseCountry:this.passportData.passportReleaseCountry,
          passportType:this.passportData.passportType,
          latinFirstName:this.passportData.latinFirstName,
          latinLastName:this.passportData.latinLastName,
        }
      }
      if (this.isChangedName) {
        changedName = {
          prevFirstName: this.prevFirstName,
          prevLastName: this.prevLastName,
        }
      }
      
      console.log('body response', {
        ...this.personalData,
        ...passportData,
        citizenship: this.passportData.citizenship,
        passportNumber:  this.passportData.passportNumber,
        ...changedName
      });
      
    }
  },
}
</script>
