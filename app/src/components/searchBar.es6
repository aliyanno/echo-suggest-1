import React from 'react'

let SearchBar = React.createClass({
  submitHandler: function (e) {
    e.preventDefault();
    this.props.searchSelect(this.state.artist);
  },

  handleArtistName: function (e) {
    this.setState({artist: e.target.value});
  },

  render: function () {
    return (
      <form className="search">
        <div className="form-group well">
          <input type="text" className="form-control" name="artist"
            placeholder="Your favorite artist" onChange={this.handleArtistName}/>
          <button className="btn btn-primary" onClick={this.submitHandler}>
            Search
          </button>
        </div>
      </form>
    );
  }
});

export default SearchBar
