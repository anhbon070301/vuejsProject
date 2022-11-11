import axios from 'axios';
const url = 'http://192.168.100.194:8080/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  logout(){

  },
  signUp(credentials) {
    return axios
      .post(url + 'sign-up/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};

// Domain : http://192.168.100.194:8080/api/
// Account : admin@codluck.com 
// Pass : Admin123@codluck.com