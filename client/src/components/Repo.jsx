import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Repo">
        <div className="Repo-imgAndLink">
          <img src={this.props.repo.avatar_url} alt="user avatar" />
          <a href={this.props.repo.html_url} target="_blank">Link to repo</a>
        </div>
        <div className="Repo-data">
          <p><span>Username:</span><br/>{this.props.repo.login}</p>
          <p><span>Repo name:</span><br/>{this.props.repo.name}</p>
          <p><span>Repo id:</span><br/>{this.props.repo.repoId}</p>
          <p><span>Latest push:</span><br/>{this.props.repo.pushed_at.split('T')[0]}</p>
          <p><span>Stargazer count:</span><br/>{this.props.repo.stargazers_count}</p>
        </div>
      </div>

    );
  }
}

export default Repo;