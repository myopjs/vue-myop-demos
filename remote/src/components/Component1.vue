<script setup lang="ts">

import {defineProps, ref} from "vue";

defineProps({
  msg1: String,
  name: String,
  count: Number,
  myInputFunction: Function
})

const model = defineModel()
const localCount = ref(0);

const update = () => {
  //@ts-ignore
  model.value++
}

const localUpdate = () => {
  localCount.value++;
}

const localF = () => {
  alert('local function, prop not received');
}
</script>

<template>
  <div class="wrapper">Im Component 1 - name : {{ name }}

    <div>Parent bound v-model is: {{ model }}</div>
    <button @click="update">Increment</button>
    <div>{{ count }}</div>

    <button @click="localUpdate">Increment Local</button>
    <div>{{ localCount }}</div>

    <button @click="()=>myInputFunction  ?myInputFunction() : localF()">test input function</button>

  </div>
</template>

<style scoped>
@import "./style.css";
</style>
