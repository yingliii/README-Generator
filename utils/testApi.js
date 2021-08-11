const gitHubApiObject = require('./api.js');

const data = {
  gitusername: 'byronbrowndev'
}

gitHubApiObject.getUser(data).then(function(response) {
  console.log(response)
})