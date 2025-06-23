<script setup lang="ts">

import {defineProps} from "vue";
import VueIcon from "./Icons/VueIcon.vue";
import MyopIcon from "./Icons/MyopIcon.vue";
import HeartIcon from "./Icons/HeartIcon.vue";

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
        <div class="icon-container vue-icon">
          <VueIcon/>
        </div>
        <div class="icon-container myop-icon">
          <MyopIcon/>
        </div>
      </div>
      <div class="content-text">
        <h2 class="title">Check out the &nbsp;vue Component.</h2>
        <p class="subtitle">Push me to production with Myop</p>
      </div>
      <div class="buttons-container">
        <button myop-id="button1" class="btn btn-outline" @click="()=> onLikeClicked  ? onLikeClicked() : localFunction()">
          <HeartIcon/>
          Love this
        </button>
        <button myop-id="button2" class="btn btn-primary" @click="()=> onCoolClicked  ? onCoolClicked() : localFunction()">
          It’s nice
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./VueDemo.css";
</style>
