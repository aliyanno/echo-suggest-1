import React from 'react'
import SearchBar from './searchBar'
import Artists from './artists'

let SearchView = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar searchSelect={this.props.searchSelect} />
        <Artists artistSelect={this.props.artistSelect}
          suggestedArtists={this.props.suggestedArtists} />
      </div>
    )
  }
});

export default SearchView
