import Axios from 'axios';

import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

const getDefaultState = () => {
    return {
        test: 'aaaaaa',
        token: '',
        user: {}
    };
};

var store = new Vuex.Store({

    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),

    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        }
    },

    mutations: {
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

    mutations: {
        SET_PRODUCT(state, product) {
            state.product = product
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

        register({ }, { username, password }) {
            axios({
                method: "post",
                url: "http://localhost:7882/addProduct.php",
                data: {
                    username: username,
                    password: password
                }
            })
                .then(function (response) {
                    alert("Thêm thành công");
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        login: ({ commit, dispatch }, { token, user }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
            // set auth header
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },

        logout: ({ commit }) => {
            commit('RESET', '');
        }

    }
})

export default store

