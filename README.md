# Myop Vue Integration Guide

## Overview

This guide explains how to integrate your Vue components with Myop, allowing you to expose them as web components and incorporate them into Myop flows.

## Table of Contents

- [Exposing Vue Components](#exposing-vue-components)
- [Creating Myop WebComponents](#creating-myop-webcomponents)
- [Creating Flows](#creating-flows)
- [Using Myop Components in Vue](#using-myop-components-in-vue)
- [Communication with Vue Components](#communication-with-Vue-components)

## Exposing Vue Components

Use the `expose` function to directly expose your Vue component:

```typescript
import { App } from './app';
import { expose } from '@myop/Vue-remote';

expose(App, 'test-comp-1', async (app) => {
  // init the app instance, registen, execute use() etc..
  return app;
}).then();
```

## Creating Myop WebComponents

Follow these steps to create a Myop WebComponent from your Vue component:

1. Open the Myop dashboard at [https://dashboard.myop.dev](https://dashboard.myop.dev/) <br/>
   <img src="docs/images/dashboard.png" alt="Dashboard" width="500"><br/>

2. To create a new component using a predefined template, click on the "Use sample component" button.
3. To create a new component from scratch, click on the "Create from scratch" button.
4. Choose Vue loader type <br/>
   <img src="docs/images/loader-selection.png" alt="Loader Selection" width="500"><br/>

5. Define how this component connects to your host app using props and refs. <br/>
6. If you're using a template, you can add all detected refs. Otherwise, add your own refs / props from the configuration panel.
   <img src="docs/images/add-detected-refs.png" alt="Add detected refs" width="500"><br/>
   <img src="docs/images/add-ref.png" alt="Add detected refs" width="500"><br/>
6. Configure your component:
   - Enter the component name and description.
   - Enter your component URL (e.g., http://localhost:4400/main.js).
   - Enter the tag name that you exposed the component with.
   - Click on the "view source code" button to view the React code example.
   - Click on the "Set to default" to set the relevant variant as the default one.
   - Click on the Delete button to delete a variant. <br/>
     <img src="docs/images/variants-section.png" alt="Variants Section" width="400" height="100"><br>


**Note:** The GUID in the browser URL is the `componentId` that you'll need later

7. Saving:
   - If you want to save the component, click on the "Save" button
   - If you want to attach the component to an existing "Flow", Click on the ChevronDown button to search for the relevant flow
   - If you want to attach the component to a new flow, click on the (after the component itself was already saved) <br/>
     <img src="docs/images/saving.png" alt="Saving" width="300"><br>

8. The component is saved and published! You can copy the code snippet and add this to your host application. <br/>
   <img src="docs/images/saved-component.png" alt="Saving" width="300"><br/>

## Creating Flows

1. Open the Myop dashboard at [https://dashboard.myop.dev/](https://dashboard.myop.dev/)
<img src="docs/images/dashboard.png" alt="Dashboard" width="500"><br/>

2. Click on the "Create a new flow" button to add a new flow

3. Add your component to the flow <br/>
   <img src="docs/images/flow.png" alt="Saving" width="400"><br/>
 
**Note:** The GUID in the browser URL is the `flowId` that you'll need later

## Using Myop Components in Vue

You can integrate Myop components into your Vue application like so:

### As a Component in Templates

```typescript
<script setup lang="ts">
  import {ref} from 'vue'; <br>
  import {MyopContainer} from '@myop/vue';
</script>

<template>
  <MyopContainer
      flowId="{flowId from dashboard}"
      componentId="{componentId from dashboard}
      name="Demo"
    />
</template>
```

## Communication with Vue Components

The `MyopContainer` component accepts any `props` that are passed down to the component, which can include a wide variety of data types. This may consist of simple primitive values, complex objects, functions, and even non-serializable objects.

The `MyopContainer` component also provides a `componentReady` event that you can use to communicate with your Vue component.

```html
<myop-container
  flowId="1d75e2f9-9a2d-49f1-aeeb-6268921a29fe"
  componentId="4df90a03-553c-44a3-b153-d0ddccdc0010"
  myProp="someObject"
  componentReady="onReady($event)"
/>
```

## Additional Resources

- For more information on the Myop platform, visit [https://myop.dev/](https://myop.dev/)
- For API documentation, refer to [https://docs.myop.dev/](https://docs.myop.dev/)
