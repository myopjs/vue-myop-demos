import './style.css'
import App from './App.vue'
import {QBtn, Quasar} from 'quasar'
import {expose} from '@myop/vue-remote';
import Component1 from "./components/Component1.vue";
import Component1CE from "./components/Component1.ce.vue";
import VueDemo from "./components/VueDemo.vue";
import VueDemoCE from "./components/VueDemo.ce.vue";

Component1CE.childComponent = Component1;

VueDemoCE.childComponent = VueDemo

expose(Component1CE, 'component-1').then();

expose(VueDemoCE, 'vue-demo').then();

expose(App, 'vue-quasar-button-dev', async (app) => {

    await import('./style.css');
    await import('quasar/dist/quasar.css')

    app.use(Quasar, {
        components: {
            QBtn
        }
    });
}).then();
