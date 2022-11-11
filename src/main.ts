import { createApp, useAttrs, VueElement } from 'vue'
import App from './App.vue'
// import './assets/main.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router/router'
import Axios from 'axios'

import 'viewerjs/dist/viewer.css'
import VueX from 'vuex'

import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import store from '../src/store/index'
import Vuex from 'vuex'

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueX);
app.use(store);
app.use(IconsPlugin);
app.mount('#app');

// createApp(App).mount('#app')

