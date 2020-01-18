const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Repo = require('../database/index.js');
const getReposByUsername = require('../helpers/github.js');
const Promise = require("bluebird");
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


Promise.promisifyAll(mongoose);


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let username = req.body.username;

  getReposByUsername(username) // get GitHub API results
    .then(repos => {
      repos = repos.slice(0, 25);
      let mappedRepos = repos.map(obj => {
        let repo = new Repo();
        repo.repoId = obj.id;
        repo.name = obj.name;
        repo.pushed_at = obj.pushed_at;
        repo.stargazers_count = obj.stargazers_count;
        repo.login = obj.owner.login;
        repo.avatar_url = obj.owner.avatar_url;
        repo.html_url = obj.html_url;

        return repo.save((err, repo) => { // add GitHub API results
          if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
              console.log('dublicate entry not added:', repo); // I don't believe I need to let the user know, because the client will always dislay the top 25 without duplicates
            } else {
              console.log('error saving repo to db', err);
            }
          }
        });
      });

      return Promise.all(mappedRepos);
    })
    .then(() => Repo.find({}).sort({stargazers_count: -1}).limit(25))
    .then(repos => res.send(repos))
    .catch(err => console.log('error at getReposByUserName in app.post', err));
});


app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  Repo.find({}).sort({stargazers_count: -1}).limit(25)
    .then(repos => res.send(repos))
    .catch(err => console.log('error at getReposByUserName in app.post', err));



});









let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

