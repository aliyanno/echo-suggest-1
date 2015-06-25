import React from 'react'

let ArtistView = React.createClass({
  handleClick: function () {
    this.props.backSelect();
  },

  render: function () {
    return (
      <div>
        <button className="btn btn-default" onClick={this.handleClick}>
          Back
        </button>
        <p>ArtistView</p>
      </div>
    )
  }
});

export default ArtistView
