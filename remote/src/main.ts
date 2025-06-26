import './style.css'
import App from './App.vue'
import {QBtn, Quasar} from 'quasar'
import {expose} from '@myop/vue-remote';
import Component1 from "./components/Component1/Component1.vue";
import Component1CE from "./components/Component1/Component1.ce.vue";
import VueDemo from "./components/Demo/VueDemo.vue";
import VueDemoCE from "./components/Demo/VueDemo.ce.vue";
import VueDemo2 from './components/Demo2/VueDemo.vue';
import VueDemo2CE from './components/Demo2/VueDemo.ce.vue';

Component1CE.childComponent = Component1;
VueDemo2CE.childComponent = VueDemo2;
VueDemoCE.childComponent = VueDemo

expose(VueDemoCE, 'vue-demo').then();
expose(VueDemo2CE, 'vue-demo-2').then();
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
