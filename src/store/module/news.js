import Axios from 'axios';

const state = {
    news: [],
    status: 21,
    newObj: {title: 'hàng siêu đẹp', content: 'Giá siêu hấp dẫn'}
};

const mutations = {
    SET_NEWS(state, news) {
        state.news = news
    },
    PUSH_NEW(state, {id, title, content, image, category_id}) {
        state.news.push({id, title, content, image, category_id})
    }
};

const actions = {

    getNew({ commit }) {
        Axios
            .get("http://localhost:7882/shop/shop_laravel/public/api/indexNews")
            .then(response => response.data)
            .then(news => { commit('SET_NEWS', news) })
            .catch(error => console.log(error));
    },

    addNew({commit}, {id, title, content, image, category_id}) {
        commit('PUSH_NEW', {id, title, content, image, category_id})
    },

    testButton() {
        console.log('aaaaa')
    }

};

const getters = {
    test: state => {
        return state.test + " toi choi mot minh"
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}