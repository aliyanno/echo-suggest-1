import React from 'react'
import SearchBar from './searchBar'
import Artists from './artists'

let SearchView = React.createClass({


  render: function() {
    return (
      <div>
        <SearchBar />
        <Artists artistSelect={this.props.artistSelect}/>
      </div>
    )
  }
});

export default SearchView
