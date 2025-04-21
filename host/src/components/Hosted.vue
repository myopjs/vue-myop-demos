<script setup lang="ts">
import { MyopContainer } from '@myop/vue-host';

const func = () => alert('hello!');
</script>

<template>
  <MyopContainer
    flowId="12760b6a-51e1-4f2d-aa7a-6b34d736a36e"
    componentId="d124740f-73a4-436a-91b6-fd293395dd68"
    :func="func"
  >
    <template #loading><p>loading...</p></template>
    <template #test>
      <button @click="console.log('YOYOYOYOY')">click</button>
    </template>
  </MyopContainer>
</template>
