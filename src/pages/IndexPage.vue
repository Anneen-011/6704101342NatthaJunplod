<template>
  <q-page padding>
    <form>
      <q-input label="Your name" v-model="name" />
      <q-input label="Your age" type="number" v-model="age" />
      <q-toggle label="I accept terms" v-model="accepted" />
      <q-btn label="Submit" @click.prevent="submitForm" />
      <q-btn label="Reset" @click.prevent="resetForm" color="secondary" />
    </form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const age = ref('')
const accepted = ref(false)

const submitForm = () => {
  console.log({ name: name.value, age: age.value, accepted: accepted.value })
}

const resetForm = () => {
  name.value = ''
  age.value = ''
  accepted.value = false
}
</script>
