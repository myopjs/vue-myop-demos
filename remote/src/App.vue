<script setup lang="ts">

import { defineProps } from 'vue';

// Define the props with an optional `name` prop
const props = defineProps({
  name: {
    type: String,
    required: false,
  },
});


const handleClick = () => {
  alert('Button clicked!');
}

</script>

<template>
    <q-btn
           :label="props.name ? props.name : 'Click Me'"
           color="primary" @click="handleClick"/>
</template>

<style scoped>

</style>
