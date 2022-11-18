import axios from 'axios';
const url = 'http://192.168.100.194:8080/api/';
export default {
  getNew(Authorization) {
    return axios
    .get(url + 'news/', {
      headers: {
        'Authorization': Authorization
      }
  })
    .then(response => response.data);
  },
  postNew(credentials, Authorization) {
    return axios
      .post(url + 'news/create', credentials, {
        headers: {
          'Authorization': Authorization
        }
    })
      .then(response => response.data);
  },
  deleteNew(id, Authorization) {
    return axios
      .post(url + 'news/delete/' + id, {}, {
        headers: {
          'Authorization': Authorization
        }
    })
      .then(response => response.data)
      .catch(error => console.log(error));;
  },
};
