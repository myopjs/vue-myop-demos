<script setup lang="ts">
import { MyopContainer } from '@myop/vue-host';

const func = () => alert('hello!');
</script>

<template>
  <!-- <MyopContainer
    flowId="7b9e2115-1e1d-415a-8d1a-9029d5707a86"
    componentId="a88ad2b2-2b6f-458b-8f48-247810460425"
    :func="func"
  >
    <template #loading><p>loading...</p></template>
    <template #test>
      <p>test</p>
      >
    </template>
  </MyopContainer> -->
  <MyopContainer
    flowId="7b9e2115-1e1d-415a-8d1a-9029d5707a86"
    componentId="a88ad2b2-2b6f-458b-8f48-247810460425"
    :func="func"
  >
    <template #loading><p>loading...</p></template>
  </MyopContainer>
</template>
