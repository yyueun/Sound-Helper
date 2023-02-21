import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(store).use(router).mount('#app').use(BootstrapVue3)
Vue.use(HighchartsVue)