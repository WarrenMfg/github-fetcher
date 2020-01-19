import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(e) {
    if (e.charCode === 'Enter') {
      this.props.onSearch(this.state.term);
      this.setState({term: ''});
    }
  }

  render() {
    return (
    <div className="Search">
      <h2>Add more repos!</h2>
      <div>Enter a GitHub username:
        <input value={this.state.term} onChange={this.onChange} onKeyPress={this.handleKeyPress}/>
        <button onClick={this.search}>Add Repos</button>
      </div>
    </div>);
  }
}

export default Search;