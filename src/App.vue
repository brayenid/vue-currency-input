<script setup>
import { ref } from 'vue'
import { addCurrency, removeCurrency, sanitizeNonNumber } from '../utils/formatter.js'

const currencyInput = ref()
const formatNumber = () => {
  currencyInput.value = sanitizeNonNumber(currencyInput.value)
  currencyInput.value = addCurrency(currencyInput.value)
}

const submit = () => {
  alert(removeCurrency(currencyInput.value))
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="submit">
      <input placeholder="Amount" @input="formatNumber" type="text" v-model="currencyInput" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
input {
  padding: 0.8rem 0.7rem;
  font-family: monospace;
  text-transform: capitalize;
  font-size: 1.2rem;
  border: 0;
}
input:focus {
  outline: none;
}
input[type='submit'] {
  background-color: cyan;
  outline: none;
  margin-left: 1rem;
  cursor: pointer;
}
</style>
