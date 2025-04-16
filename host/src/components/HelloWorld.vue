<script setup lang="ts">
import {ref} from 'vue'
import {MyopContainer} from "@myop/vue";

defineProps<{ msg: string }>()

const count = ref(0);


</script>

<template>
  <h1>{{ msg }}</h1>


  <div style="display: flex;justify-content: center;">

    <!--    <MyopContainer flowId="49283058-a787-4fa5-b0d2-516b2e6dc5e3" componentId="8c72d29b-c8a0-41cf-b08f-4acca96c7a16"-->
    <!--                   myName="hadar"/>-->

    <!--    <MyopContainer flowId="08398c83-020f-44ec-b24d-6181a92e47f0"-->
    <!--                   componentId="747d141a-c657-4777-a1df-830ff3a587a1"-->
    <!--                   name="Micad Demo"-->
    <!--                   v-model="count"-->
    <!--    />-->

    <!--    <MyopContainer flowId="08398c83-020f-44ec-b24d-6181a92e47f0"-->
    <!--                   componentId="747d141a-c657-4777-a1df-830ff3a587a1"-->
    <!--                   name="Micad Demo2"-->
    <!--                   v-model="count"-->
    <!--      /> -->

    <MyopContainer flowId="08398c83-020f-44ec-b24d-6181a92e47f0"
                   componentId="747d141a-c657-4777-a1df-830ff3a587a1"
                   name="Demo 1"
                   v-model="count"
                   :count="count"
    />

    <MyopContainer flowId="08398c83-020f-44ec-b24d-6181a92e47f0"
                   componentId="747d141a-c657-4777-a1df-830ff3a587a1"
                   name="Demo2"
                   v-model="count"
                   :count="count"
    />

  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
    >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
