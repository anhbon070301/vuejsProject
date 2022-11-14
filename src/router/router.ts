import { createRouter, createWebHistory } from "vue-router";
import tinhToanVue from "@/components/tinhToan.vue";
import HeaderVue from "@/components/Header.vue";
import TheWelcomeVue from "@/components/TheWelcome.vue";
import axiosTestVue from "@/components/axiosTest.vue";
import watchedVue from "@/components/watched.vue";

import homeVue from "@/views/home.vue";
import detailVue from "@/views/detailNew.vue";
import loginVue from "@/views/auth/login.vue";
import registerVue from "@/views/auth/register.vue";
import newVue from "@/views/news/ListNewVue.vue"

const routes = [
    {path: '/tinhToanVue', component: tinhToanVue},
    {path: '/HeaderVue', component: HeaderVue},
    {path: '/watchedVue', component: watchedVue},

    {path: '/', component: loginVue, name: 'login', meta: { title: 'Login | Cod LUCK' }},
    {path: '/Home', component: homeVue, name: 'home', meta: { title: 'Home | Cod LUCK' }},
    {path: '/axiosTestVue', component: axiosTestVue, name: 'list', meta: { title: 'List | Cod LUCK' }},
    {path: '/registerVue', component: registerVue,  name: 'register', meta: { title: 'Register | Cod LUCK' }},
    {path: '/detailVue', component: detailVue, name: 'detail', meta: { title: 'Detail | Cod LUCK' }},
    {path: '/NewVue', component: newVue, name: 'news', meta: { title: 'News | Cod LUCK' }},

    {path: '/:pathMatch(.*)*', component: TheWelcomeVue}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    document.title = `${to.meta.title}`;
});

export default router