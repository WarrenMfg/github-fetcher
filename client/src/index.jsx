import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.addReposToState = this.addReposToState.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'https://damp-beach-94644.herokuapp.com/repos',
      success: this.addReposToState,
      error: function(err) {
        console.log('error at index.jsx search ajax', err);
      }
    });
  }

  search (username) {
    console.log(`${username} was searched`);
    // TODO
    $.ajax({
      method: 'POST',
      url: 'https://damp-beach-94644.herokuapp.com/repos',
      data: JSON.stringify({username: username}),
      contentType: 'application/json',
      success: this.addReposToState,
      error: function(err) {
        console.log('error at index.jsx search ajax', err);
      }
    });
  }

  addReposToState(data) {
    this.setState({repos: data})
  }

  render () {
    return (
      <div className="App">
        <h1>GitHub Fetcher</h1>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));