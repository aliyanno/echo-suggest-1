import React from 'react'

let SearchBar = React.createClass({
  render: function () {
    return (
      <form className="search">
        <div className="form-group well">
          <input type="text" className="form-control" placeholder="Your favorite artist"/>
          <button className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    );
  }
});

export default SearchBar
