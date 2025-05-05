import './style.css'
import App from './App.vue'
import {QBtn, Quasar} from 'quasar'
import {expose} from '@myop/vue-remote';
import Component1 from "./components/Component1/Component1.vue";
import Component1CE from "./components/Component1/Component1.ce.vue";
import VueDemo from "./components/Demo/VueDemo.vue";
import VueDemoCE from "./components/Demo/VueDemo.ce.vue";

Component1CE.childComponent = Component1;
VueDemoCE.childComponent = VueDemo

expose(VueDemoCE, 'vue-demo').then();

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
