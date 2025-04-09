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

import {exposeVueComponent} from '@myop/vue-remote';

exposeVueComponent(App, 'vue-quasar-button-dev', async (app) => {
    await import('./style.css');
    await import('quasar/dist/quasar.css')

    app.use(Quasar, {
        components: {
            QBtn
        }
    });
}).then();
