import React from 'react';
import Repo from './Repo.jsx';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="RepoList">
        <h4>Top 25 most recently pushed repos sorted by stargazer count</h4>
        {this.props.repos.map(repo => <Repo repo={repo} key={repo.repoId}/>)}
      </div>

    );
  }
}

export default RepoList;