<script setup lang="ts">

import {defineProps} from "vue";

defineProps({
  msg1: String,
  name: String,
  count: Number
})

const model = defineModel()

function update() {
  //@ts-ignore
  model.value++
}

</script>

<template>

  <div class="wrapper">Im Component 1 - name : {{ name }}</div>

  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">Increment</button>
  <div>{{ count }}</div>

</template>

<style scoped>
.wrapper {
  border: 2px solid crimson;
}
</style>
