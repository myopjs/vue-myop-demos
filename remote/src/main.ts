import './style.css';
import App from './App.vue';
import { QBtn, Quasar } from 'quasar';
import { exposeVueComponent } from '@myop/vue-remote';
import Component1 from './components/Component1.vue';
import PropFunc from './components/PropFunc.vue';
//import 'quasar/dist/quasar.css'

// // Create Vue app and use Quasar
// const app = createApp(App)
//
// // Use Quasar and register QBtn manually
// app.use(Quasar, {
//     components: {
//         QBtn, // Register QBtn component manually if needed
//     }
// })
//
// app.mount('#app')

exposeVueComponent(Component1, 'component-1').then();
// , async (app) => {
// await import('./style.css');
// await import('quasar/dist/quasar.css')
//
// app.use(Quasar, {
//     components: {
//         QBtn
//     }
// });
// });

exposeVueComponent(App, 'vue-quasar-button-dev', async (app) => {
  await import('./style.css');
  await import('quasar/dist/quasar.css');

  app.use(Quasar, {
    components: {
      QBtn,
    },
  });
}).then();

exposeVueComponent(PropFunc, 'prop-func', async (app) => {
  debugger;
  console.log('APP CONFIG =========>', app);
}).then();
