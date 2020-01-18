const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true}); // name of database

const db = mongoose.connection;
db.on('error', (err) => console.log('error at db.on()', err));
db.once('open', function() {
  console.log('db.open connection!');
});

const repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  repoId: {type: Number, unique: true}, // repo id will be used to avoid duplicate repos
  name: String,
  pushed_at: String,
  stargazers_count: Number,
  login: String,
  avatar_url: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // seems redundant when mongoose's quick start guide exemplifies its own .save method
}

module.exports = Repo;