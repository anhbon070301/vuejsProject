import intantce from '../sevice/Intantce'
export default {
  getAll(urlF) {
    return intantce
      .get(urlF)
      .then(response => response.data);
  },
  postAll(credentials, urlF) {
    return intantce
      .post(urlF, credentials)
      .then(response => response.data);
  },
  deleteAll(id, urlF) {
    return intantce
      .post(urlF + id)
      .then(response => response.data)
      .catch(error => console.log(error));;
  },
  showById(id, urlF) {
    return intantce
      .get(urlF + id)
      .then(response => response.data);
  },
  update(credentials, urlF) {
    return intantce
      .post(urlF, credentials)
      .then(response => {

        return response.data.message
      });
  }
};
