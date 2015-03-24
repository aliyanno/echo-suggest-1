import React from 'react/addons'
import _ from 'lodash'

let Search = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  propTypes: {
    onSearch: React.PropTypes.func.isRequired,
    onClickArtist: React.PropTypes.func,
    suggestedArtists: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string,
        name: React.PropTypes.string
      })
    ),
  },
  getDefaultProps(){
    return {
      suggestedArtists: [],
      onClickArtist: _.noop
    }
  },
  getInitialState(){
    return { artist: '' }
  },
  render(){
    let { onSearch, onClickArtist, suggestedArtists } = this.props;
    let { artist } = this.state;
    return (
      <div className="search">
        <div className="form-group well">
          <form onSubmit={onSearch.bind(null, artist)}>
            <input
              valueLink={this.linkState('artist')}
              className='form-control'
              placeholder="Type an artist.."
            />
          </form>
        </div>
        <div className="results list-group">
          {suggestedArtists.map(artist=>
            <a href='#' key={artist.id}
              onClick={onClickArtist.bind(null, artist)}
              className='list-group-item'
            >{artist.name}</a>
          )}
        </div>
      </div>
    );
  }
})

export default Search;