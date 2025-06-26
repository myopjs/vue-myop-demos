<script setup lang="ts">

import {defineProps} from "vue";
import VueIcon from "./Icons/VueIcon.vue";
import MyopIcon from "./Icons/MyopIcon.vue";

defineProps({
  onLikeClicked: Function,
  onCoolClicked: Function,
})

const localFunction = () => {
  alert('local function, prop not received');
}
</script>

<template>
  <div class="component-container">
    <div class="component-inner-container">
      <div class="icons-container">
        <VueIcon/>
        <MyopIcon/>
      </div>
      <div class="content-text">
        <h2 class="title">Hey! I’m a Vue Component.</h2>
        <p class="subtitle">Push me to production with Myop</p>
      </div>
      <div class="buttons-container">
        <button myop-id="button1" class="btn btn-outline" @click="()=> onLikeClicked  ? onLikeClicked() : localFunction()">
          Like it!
        </button>
        <button myop-id="button2" class="btn btn-primary" @click="()=> onCoolClicked  ? onCoolClicked() : localFunction()">
          Cool
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./VueDemo.css";
</style>
