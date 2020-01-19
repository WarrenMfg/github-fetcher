import React from 'react';
import Repo from './Repo.jsx';
import {CSSTransitionGroup} from 'react-transition-group';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="RepoList">
        <h3>Top 25 most recently pushed repos sorted by stargazer count</h3>
        <CSSTransitionGroup
          transitionName="slideIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={250}
        >
          {this.props.repos.map(repo => <Repo repo={repo} key={repo.repoId}/>)}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default RepoList;