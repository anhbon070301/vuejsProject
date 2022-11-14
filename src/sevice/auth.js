import axios from 'axios';
const url = 'http://192.168.100.194:8080/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  logout(credentials) {
    return axios
      .post(url + 'logout/', credentials)
      .then(response => response.data)
      .catch(error => console.log(error));
  },
  register(credentials) {
    return axios
      .post(url + 'register/', credentials)
      .then(response => response.data);
  },
  postName(credentials) {
    return axios
      .post('http://localhost:7882/shop/shop_laravel/public/api/postName', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};

// Domain : http://192.168.100.194:8080/api/
// Account : admin@codluck.com
// Pass : Admin123@codluck.com
// https://webdeasy.de/en/complete-login-system-with-node-js-vue-js-vuex-part-2-2/