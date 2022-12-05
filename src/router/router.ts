import { createRouter, createWebHistory } from "vue-router";
import tinhToanVue from "@/components/tinhToan.vue";
import HeaderVue from "@/components/Header.vue";
import TheWelcomeVue from "@/components/TheWelcome.vue";
import axiosTestVue from "@/components/axiosTest.vue";
import watchedVue from "@/components/watched.vue";

import HomeVue from "@/views/HomeVue.vue";
import detailVue from "@/views/detailNew.vue";
import LoginVue from "@/views/auth/login.vue";
import RegisterVue from "@/views/auth/register.vue";
import NewVue from "@/views/news/ListNewVue.vue";
import ShowCategoryVue from "@/views/category/ShowCategoryVue.vue"
import store from '@/store/index';
import ProfileVue from '@/views/auth/ProVue.vue';
import ListContactVue from '@/views/contact/ListContactVue.vue'

const routes = [
    { path: '/tinhToanVue', component: tinhToanVue },
    { path: '/HeaderVue', component: HeaderVue },
    { path: '/watchedVue', component: watchedVue },

    { path: '/', component: LoginVue, name: 'login', meta: { title: 'Login | Cod LUCK' } },
    { path: '/Home', component: HomeVue, name: 'home', meta: { title: 'Home | Cod LUCK' } },
    { path: '/axiosTestVue', component: axiosTestVue, name: 'list', meta: { title: 'List | Cod LUCK' } },
    { path: '/registerVue', component: RegisterVue, name: 'register', meta: { title: 'Register | Cod LUCK' } },
    { path: '/detailVue/:id', component: detailVue, name: 'detail', meta: { title: 'Detail | Cod LUCK' } },
    { path: '/NewVue/:id', component: NewVue, name: 'news', meta: { title: 'News | Cod LUCK' } },
    { path: '/ShowCategoryVue', component: ShowCategoryVue, name: 'ShowCategoryVue', meta: { title: 'Category | Cod LUCK' } },
    { path: '/Profile', component: ProfileVue, name: 'profile', meta: { title: 'Profile | Cod LUCK' } },
    { path: '/Contact', component: ListContactVue, name: 'contact', meta: { title: 'Contact | Cod LUCK' } },

    { path: '/:pathMatch(.*)*', component: TheWelcomeVue }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && to.name !== 'register' && !store.state.token) {
        next({ name: 'login' })
    } else {
        next();
    }
    document.title = `${to.meta.title}`;
});

export default router