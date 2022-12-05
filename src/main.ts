import { createApp, useAttrs, VueElement } from 'vue'
import App from './App.vue'
// import './assets/main.css'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import router from './router/router'
import Axios from 'axios'

import 'viewerjs/dist/viewer.css'
import VueX from 'vuex'

import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import store from '../src/store/index'
import Paginate from 'vuejs-paginate'

//Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueX);
app.use(store);
app.use(BootstrapVue3);
app.use(ElementPlus);
app.use(Paginate)
app.mount('#app');

// createApp(App).mount('#app')

