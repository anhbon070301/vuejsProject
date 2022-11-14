import axios from 'axios';
export default {
  getNew() {
    return axios
    .get('http://localhost:7882/shop/shop_laravel/public/api/indexNews')
    .then(response => response.data);
  },
  postNew(credentials) {
    return axios
      .post('http://localhost:7882/shop/shop_laravel/public/api/storeNews', credentials)
      .then(response => response.data);
  },
};
