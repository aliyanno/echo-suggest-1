import React from 'react'
import _ from 'lodash'

let Artists = React.createClass({
  handleClick: function () {
    artistSelect();
  },

  render: function () {
    let {suggestedArtists} = this.props;
    return (
      <div>
        { suggestedArtists.map(function(artist) {
          return <p key={artist.id}>{artist.name}</p>
        })}
      </div>
    );
  }
});

export default Artists
