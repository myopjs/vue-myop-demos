//import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {QBtn, Quasar} from 'quasar'
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

import {expose} from '@myop/vue-remote';
import Component1 from "./components/Component1.vue";
import Component1CE from "./components/Component1.ce.vue";

Component1CE.childComponent = Component1;

expose(Component1CE, 'component-1').then();

expose(App, 'vue-quasar-button-dev', async (app) => {

    await import('./style.css');
    await import('quasar/dist/quasar.css')

    app.use(Quasar, {
        components: {
            QBtn
        }
    });
}).then();
