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

There are two ways to expose your Vue components to Myop:

### Direct Exposure

Use the `expose` function to directly expose your Vue component:

```typescript
import { AppComponent } from './app/app.component';
import { exposeVueComponent } from '@myop/Vue-remote';

exposeVueComponent(AppComponent, 'test-comp-1', async () => {
  return appConfig;
}).then();
```

## Creating Myop WebComponents

Follow these steps to create a Myop WebComponent from your Vue component:

1. Open the Myop dashboard at [https://dashboard.myop.dev/](https://dashboard.myop.dev/) <br>
   <img src="docs/images/admin-dashboard.png" alt="Add Component Button" width="500"><br>

2. Navigate to the Component Editor screen and click on **"+ Add a Component"** button <br>
   <img src="docs/images/component-editor.png" alt="Add Component Button" width="500"><br>

3. In the Component Editor, click on **"+ Add"** button

4. Configure your component:

   - Change the loader to "WebComponent"
   - Enter your component URL (e.g., http://localhost:4400/main.js)
   - Enter the tag name that you exposed the component with

5. Your Vue component should now appear in the admin panel

6. Note: The GUID in the browser URL is the `componentId` that you'll need later

## Creating Flows

1. Open the Myop dashboard at [https://dashboard.myop.dev/](https://dashboard.myop.dev/)

2. Navigate to the Flows Editor screen and click on **"+ Add a Flow"** button

3. Add your component to the flow

4. Note: The GUID in the browser URL is the `flowId` that you'll need later

## Using Myop Components in Vue

You can integrate Myop components into your Vue application in two ways:

### Option 1: Via Routing

```typescript
// Before
import { TodoComponent } from './todo.component.ts';

{ path: 'todo', component: TodoComponent }

// After
import { MyopContainerComponent } from '@myop/Vue';

{
    path: 'todo',
    data: {
      componentId: "ca8c0c4f-d26e-40c8-bf32-19eb104ee710",
      flowId: "1d75e2f9-9a2d-49f1-aeeb-6268921a29fe"
    },
    component: MyopContainerComponent
}
```

### Option 2: As a Component in Templates

```typescript
// Before
import { Component } from '@Vue/core';
import { RouterOutlet } from '@Vue/router';
import { TranslocoRootModule } from './transloco-root.module';
import { TodoComponent } from './todo.component.ts';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  template: '<todo-component></todo-component>',
})
export class AppComponent {}

// After
import { Component } from '@Vue/core';
import { RouterOutlet } from '@Vue/router';
import { TranslocoRootModule } from './transloco-root.module';
import { MyopContainerComponent } from '@myop/Vue';

@Component({
  selector: 'app-root',
  imports: [MyopContainerComponent],
  template: `<myop-container
    flowId="1d75e2f9-9a2d-49f1-aeeb-6268921a29fe"
    componentId="4df90a03-553c-44a3-b153-d0ddccdc0010"
  />`,
})
export class AppComponent {}
```

## Communication with Vue Components

The `MyopContainer` component accepts `inputs`, which can include a wide variety of data types. This may consist of simple primitive values, complex objects, functions, and even non-serializable objects.

The `MyopContainer` component also provides a `componentReady` event that you can use to communicate with your Vue component.

```html
<myop-container
  flowId="1d75e2f9-9a2d-49f1-aeeb-6268921a29fe"
  componentId="4df90a03-553c-44a3-b153-d0ddccdc0010"
  [inputs]="someObject"
  (componentReady)="onReady($event)"
/>
```

In your component class

```typescript

someObject = {
   key1: '123',
   key2: '456',
   someInputValue : 'testValue',
   fun1 : ()=>{
      alert('ffff')
   }
}

onReady(component: IMyopComponent) {
    // Send messages to the component
    component.send(ChangeTextMessage.create(component.refs.title, this.inputs.name));

    // Show the component
    component.show();
}
```

## Additional Resources

- For more information on the Myop platform, visit [https://myop.dev/](https://myop.dev/)
- For API documentation, refer to [https://docs.myop.dev/](https://docs.myop.dev/)
