import React from 'react'
import ArtistView from './components/artistView'
import SearchView from './components/searchView'

let EchoSuggest = React.createClass({
  getInitialState: function () {
    return {
      view: 'search'
    }
  },

  renderSearch: function () {
    return (
      <SearchView />
    );
  },

  renderArtist: function () {
    return (
      <ArtistView />
    );
  },

  render: function () {
    let renderViewFunction;

    switch (this.state.view) {
      case 'artist':
        renderViewFunction = this.renderArtist()
        break;
      case 'search':
      default:
        renderViewFunction = this.renderSearch()
        break;
    }

    return (
      <div>
        <h1>Echo Suggest</h1>
        {renderViewFunction}
      </div>
    );
  }
});

React.render(<EchoSuggest />, document.querySelector('.container'));
