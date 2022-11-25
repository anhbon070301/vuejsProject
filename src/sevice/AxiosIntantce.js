import axios from 'axios';
import store from '../store/index'

const AxiosIntance = axios.create({
    baseURL: 'http://localhost:7882/shop/shop_laravel/public/api/'
});

AxiosIntance.interceptors.request.use(function (config) {
    const token = store.state.token;
    config.headers.Authorization = token;

    return config;
});

export default AxiosIntance;