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
        <h2 class="title">Nice Component!</h2>
        <p class="subtitle">Made with Myop</p>
      </div>
      <div class="buttons-container">
        <button class="btn btn-outline" @click="()=> onLikeClicked  ? onLikeClicked() : localFunction()">
          Like it!
        </button>
        <button class="btn btn-primary" @click="()=> onCoolClicked  ? onCoolClicked() : localFunction()">
          Cool
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./VueDemo.css";
</style>
