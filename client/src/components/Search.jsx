import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({term: ''});
  }

  handleKeyUp(e) {
    let enter = (event.keyCode ? event.keyCode : event.which);
    if (enter === 13) {
      this.props.onSearch(this.state.term);
      this.setState({term: ''});
    }
  }

  render() {
    return (
    <div className="Search">
      <h2>Add more repos!</h2>
      <div>Enter a GitHub username:
        <input value={this.state.term} onChange={this.onChange} onKeyUp={this.handleKeyUp}/>
        <button onClick={this.search}>Add Repos</button>
      </div>
    </div>);
  }
}

export default Search;