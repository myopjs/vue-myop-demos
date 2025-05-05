<script setup lang="ts">

import {defineProps} from "vue";

defineProps({
  likeItInputFunction: Function,
  coolInputFunction: Function,
})

const localF = () => {
  alert('local function, prop not received');
}
</script>

<template>
  <div class="component-container">
    <div class="icons-container">
      <div class="icon vue-icon">
        <svg fill="none" height="25" viewBox="0 0 29 25" width="29" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.4832 0.550049L14.2505 6.04623L11.0168 0.550049H0.25L14.2505 24.35L28.25 0.550049H17.4832Z"
                fill="#41B883"/>
          <path d="M17.4828 0.550049L14.2501 6.04623L11.0164 0.550049H5.84961L14.2501 14.8296L22.6496 0.550049H17.4828Z"
                fill="#34495E"/>
        </svg>
      </div>
      <div class="icon myop-icon">
        <svg fill="none" height="15" viewBox="0 0 29 15" width="29" xmlns="http://www.w3.org/2000/svg">
          <g id="Myop_Logo_Symbol">
            <g id="Union">
              <path
                  d="M7.38858 3.83703C7.38858 5.81809 5.90249 7.42406 4.06929 7.42406C2.2361 7.42406 0.75 5.81809 0.75 3.83703C0.75 1.85597 2.2361 0.25 4.06929 0.25C5.90249 0.25 7.38858 1.85597 7.38858 3.83703Z"
                  fill="#0A090A"/>
              <path
                  d="M8.72543 0.686405V7.00857C8.72543 7.16321 8.84058 7.28774 8.98266 7.29463C10.1574 7.35161 11.6504 7.84636 13.3347 10.2647C15.4883 13.3567 20.106 14.3758 22.2305 14.2378C22.3619 14.2293 22.4602 14.1087 22.4602 13.9656V8.47234C22.471 8.19249 22.5161 7.789 22.6804 7.63683C22.8338 7.49475 23.0855 7.44277 23.2679 7.42409H28.4925C28.6347 7.42409 28.75 7.29873 28.75 7.14409V0.758359C28.75 0.603719 28.6347 0.478359 28.4925 0.478359H22.5802C22.438 0.478359 22.3227 0.603719 22.3227 0.758359V6.27918C22.3046 6.56256 22.2561 6.85885 22.1376 6.96935C21.9613 7.13374 21.7028 7.13761 21.5627 7.12496C20.1985 6.85056 19.4647 6.43662 16.7801 3.52207C14.0885 0.600002 10.4842 0.418403 8.98222 0.407147C8.84001 0.406081 8.72543 0.531765 8.72543 0.686405Z"
                  fill="#0A090A"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="content-text">
      <h2 class="title">Nice Component!</h2>
      <p class="subtitle">Made with Myop</p>
    </div>
    <div class="buttons-container">
      <button class="btn btn-outline" @click="()=> likeItInputFunction  ? likeItInputFunction() : localF()">Like it!
      </button>
      <button class="btn btn-primary" @click="()=> coolInputFunction  ? coolInputFunction() : localF()">Cool</button>
    </div>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
