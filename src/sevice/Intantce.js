import axios from 'axios';
import store from '../store/index'

const AxiosIntance = axios.create({
    baseURL: 'http://192.168.100.194:8080/api/'
});

AxiosIntance.interceptors.request.use(function (config) {
    const token = store.state.token;
    config.headers.Authorization = token;
    config.headers['Content-Type'] = `multipart/form-data`;

    return config;
});

export default AxiosIntance;