import Axios from 'axios';

import Vuex from 'vuex'

import News from "/xampp/htdocs/vuejs-learn/src/sevice/new"

import news from './module/news';

import createPersistedState from 'vuex-persistedstate'

const getDefaultState = () => {
    return {
        status: 0,
        token: '',
        product: [],
        test: 'toi la Bon',
        user: {}
    };
};

var store = new Vuex.Store({

    modules: {
        news
    }, 

    strict: true,
    //plugins: [createPersistedState()],
    state: getDefaultState(),

    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        },
    },

    // mutations: {
    //     SET_TOKEN: (state, token) => {
    //         state.token = token;
    //     },
    //     SET_USER: (state, user) => {
    //         state.user = user;
    //     },
    //     RESET: state => {
    //         Object.assign(state, getDefaultState());
    //     }
    // },

    mutations: {
        SET_PRODUCT(state, product) {
            state.product = product
        },
        SET_STATUS(state, status) {
            state.status = status
        },
        SET_ACCOUNT(state, userName) {
            state.account.userName = userName
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },

    actions: {

        getProduct({ commit }) {
            Axios
                .get("http://localhost:7882/blog/public/product")
                .then(response => response.data)
                .then(product => { commit('SET_PRODUCT', product) })
                .catch(error => console.log(error));
        },

        register({ commit }, { token }) {
            commit('SET_TOKEN', token);
        },

        login: ({ commit, dispatch }, { token, user }) => {
            commit('SET_STATUS', 2);
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
            // set auth header
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },

        logout: ({ commit }) => {
            commit('RESET', '');
        },

        checkAuthen(token) {
            return token === "" ? false : true;
        },
        
    }
})

export default store

