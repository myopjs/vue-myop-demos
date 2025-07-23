<script setup lang="ts">

import VueDemo from './VueDemo.vue';
import {defineProps, onMounted} from "vue";
import {connect} from "@myop/vue-remote";

// when render in none vue environment we need to manually connect Myop SDK
onMounted(() => {
  connect();
});

defineProps({
  onLikeClicked: Function,
  onCoolClicked: Function,
})

</script>

<template>
  <VueDemo v-bind="$props"/>
</template>

<style>
@import "./VueDemo.css";
</style>
