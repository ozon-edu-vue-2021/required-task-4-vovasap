<template>
  <VFormGroup title="Личные данные">
    <div class="d-flex">
      <VInput v-model="personalData.lastName" label="Фамилия" type="text" />
      <VInput v-model="personalData.firsName" label="Имя" type="text" />
      <VInput v-model="personalData.patronymic" label="Отчество" type="text" />
    </div>
    <VInput v-model="personalData.birthDay" label="Дата рождения" type="date" />
    <VInput v-model="personalData.email" label="E-mail" type="email" />
    <VRadio
      v-model="personalData.gender"
      :options="genderOptions"
      title="Пол"
    />
  </VFormGroup>
</template>
<script>
import VInput from '@/components/VInput.vue'
import VRadio from '@/components/VRadio.vue'
import VFormGroup from '@/components/VFormGroup.vue'
export default {
  name: 'PersonalDataForm',
  components: {
    VInput,
    VFormGroup,
    VRadio,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      genderOptions: [
        { label: 'мужской', value: 'male' },
        { label: 'женский', value: 'female' },
      ],
    }
  },
  computed: {
    personalData: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
