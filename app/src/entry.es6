import React from 'react'
import Axios from 'axios'
import API from './config'
import ArtistView from './components/artistView'
import SearchView from './components/searchView'

let EchoSuggest = React.createClass({
  getInitialState: function () {
    return {
      view: 'search',
      suggestedArtists: []
    }
  },

  renderSearch: function () {
    return (
      <SearchView artistSelect={this.artistSelected}
        searchSelect={this.searchSelected}
        suggestedArtists={this.state.suggestedArtists}/>
    );
  },

  renderArtist: function () {
    return (
      <ArtistView backSelect={this.backSelected}/>
    );
  },

  artistSelected: function () {
    this.setState({
      view: 'artist'
    });
  },

  backSelected: function () {
    this.setState({
      view: 'search'
    });
  },

  searchSelected: function (artist, event) {
    var self = this;
    Axios.get('http://developer.echonest.com/api/v4/artist/similar', {
      params: {
        name: artist,
        api_key: API.api_key
      }
    })
    .then(function (response) {
      console.log(response.data.response.artists);
      self.setState({
        suggestedArtists: response.data.response.artists
      });
    })
    .catch(function (response) {
      console.log(response);
    });
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
