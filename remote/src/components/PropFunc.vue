<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ func: () => void }>();
</script>

<template>
  <div class="wrapper">
    <p>Im a component that accepts a function</p>

    <button @click="props.func">run func</button>
  </div>
  <slot name="test"> default slot value </slot>
  <slot name="test"> default slot value </slot>
</template>

<style scoped>
.wrapper {
  border: 2px solid hotpink;

  button {
    color: darkolivegreen;
  }
}
</style>
