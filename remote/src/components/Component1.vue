<script setup lang="ts">

import {defineProps, ref} from "vue";

defineProps({
  msg1: String,
  name: String,
  count: Number
})

const model = defineModel()
const localCount = ref(0);

const update = () =>{
  //@ts-ignore
  model.value++
}

const localUpdate = () =>{
  localCount.value++;
}



</script>

<template>

  <div class="wrapper">Im Component 1 - name : {{ name }}</div>

  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">Increment</button>
  <div>{{ count }}</div>

  <button @click="localUpdate">Increment Local</button>
  <div>{{ localCount }}</div>

</template>

<style scoped>
.wrapper {
  border: 2px solid crimson;
}
</style>
