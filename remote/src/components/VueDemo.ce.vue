<script setup lang="ts">

import VueDemo from './VueDemo.vue';
import {defineProps} from "vue";

defineProps({
  likeItInputFunction: Function,
  coolInputFunction: Function,
})

</script>

<template>
  <VueDemo/>
</template>

<style>
@import "./VueDemo.css";
</style>
