import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 19,
        product: []
    }),
    getters: {
        getProducts(state) {
            return state.product;
        }
    },
    actions: {
        getProduct() {
            axios
                .get("http://localhost:7882/blog/public/product")
                .then(response => (this.product = response.data))
                .catch(error => console.log(error));
        },
    }
})