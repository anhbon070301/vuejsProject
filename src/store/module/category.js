import category from "/xampp/htdocs/vuejs-learn/src/sevice/sevice";

const state = {
    categories: [],
    categoryUpdate: { id: '', name: '' },
    id: 144
};

const mutations = {
    SET_CATEGORY(state, categories) {
        state.categories = categories
    },
    SET_CATEGORYEDIT(state, { id, name }) {
        state.categoryUpdate = { id, name }
    },
    PUSH_CATEGORY(state, { id, name }) {
        state.category.data.push({ id, name })
    }
};

const actions = {

    getCategory({ commit }, { categories }) {
        commit('SET_CATEGORY', categories);
        console.log('dang chay');
    },

    // async deleteCategory({ dispatch }, {id, token }) {
    //     if (confirm("Bạn muốn xóa dòng này?")) {
    //         try {
    //             const response = await category.deleteAll(
    //                 id,
    //                 token,
    //                 "categories/delete/"
    //             );
    //             this.msg = response.msg;
    //             dispatch("getCategory", { token: token });
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // },

    async postCategory({ dispatch }, { name, token }) {
        try {
            const dataCategory = {
                name: name
            };

            const response = await category.postAll(
                dataCategory,
                token,
                "categories/create"
            );

            dispatch("getCategory", { token: token });
            console.log('a' + dataPost)
        } catch (error) {
            this.msg = error.response
        }
    },

    addCategory({ commit }, { id, name }) {
        commit('PUSH_CATEGORY', { id, name })
    },

    updateCategory({ dispatch }, { id, name, token }) {
        const dataUpdate = {
            id: id,
            name: name
        };
        category
            .update(dataUpdate, token, "categories/update")
            .then(res => {
                console.log(res.message);
                dispatch('getCategory', { token: token })
            })
            .catch(error => {
                console.log(error);
            });
    }

    // editCategory({ commit }, { id, name }) {
    //     commit('SET_CATEGORYEDIT', { id, name })
    // },

};

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}