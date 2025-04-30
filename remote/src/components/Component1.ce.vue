<script setup lang="ts">

import Component1 from './Component1.vue'
import {defineProps} from "vue";

defineProps({
  msg1: String,
  name: String,
  count: Number,
  myInputFunction: Function
})

</script>

<template>
  <Component1/>
</template>

<style>
@import "./style.css";
</style>
