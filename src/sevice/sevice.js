import axios from 'axios';
const url = 'http://192.168.100.194:8080/api/';
export default {
  getAll(Authorization, urlF) {
    return axios
    .get(url + urlF, {
      headers: {
        'Authorization': Authorization
      }
  })
    .then(response => response.data);
  },
  postAll(credentials, Authorization, urlF) {
    return axios
      .post(url + urlF, credentials, {
        headers: {
          'Authorization': Authorization
        }
    })
      .then(response => response.data);
  },
  deleteAll(id, Authorization, urlF) {
    return axios
      .post(url + urlF + id, {}, {
        headers: {
          'Authorization': Authorization
        }
    })
      .then(response => response.data)
      .catch(error => console.log(error));;
  },
  showById (id, Authorization, urlF) {
    return axios
    .get(url + urlF +id, {
      headers: {
        'Authorization': Authorization
      }
  })
    .then(response => response.data);
  },
  update (credentials, Authorization, urlF) {
    return axios
    .post(`${url}${urlF}`, credentials,{
      headers: {
        'Authorization': Authorization
      }
  })
    .then(response => response.data);
  }
};
