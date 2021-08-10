const axios = require('axios');

const githubApi = {
  getUser(userResponses) {
    let response = axios
    .get(`https://api.github.com/users/${userResponses.gitusername}`);
    response.then(resp => console.log(resp));
    return response.data;
  }
};

module.exports = githubApi;