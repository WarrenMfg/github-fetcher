const request = require('request');
const reqPromise = require('request-promise');
// const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos?type=owner&sort=pushed&direction=desc`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.CONFIG}`
    },
    json: true
  };

  return reqPromise(options);
}

module.exports = getReposByUsername;

