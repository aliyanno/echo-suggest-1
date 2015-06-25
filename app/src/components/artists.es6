import React from 'react'

let Artists = React.createClass({
  handleClick: function () {
    this.props.artistSelect();
  },

  render: function () {
    return (
      <div>
        <a onClick={this.handleClick}>
          <p>Artist</p>
        </a>
      </div>
    );
  }
});

export default Artists
