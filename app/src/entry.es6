import React from 'react'

let EchoSuggest = React.createClass({
  getInitialState(){
    return {
      suggestedArtists: [
        { "id": "ARYJFJ91187B9B149A", "name": "The Wilderness" },
        { "id": "ARGOAEZ122988F2731", "name": "Big a" },
        { "id": "AREBMWM11F50C47FFC", "name": "Fantastic Four" },
        { "id": "ARGMRZU1187B9B6981", "name": "The Heaters" },
        { "id": "ARDLOZD1187B9B98A8", "name": "Boundless" },
        { "id": "ARVXBOT1187B992D93", "name": "City to City" },
        { "id": "ARUAQW51187B994266", "name": "Private Dancer" },
        { "id": "ARSBVCE1187B99BE74", "name": "Hearts of Stone" },
        { "id": "ARCF56Q1187FB55282", "name": "Airliner" },
      ]
    }
  },
  render(){
    return (
      <div className='suggestion-app container'>
        <h3>Echo Suggest</h3>
        <div className="form-group well">
          <input className='form-control' placeholder="Type an artist.." />
        </div>
        <div className="results list-group">
          {this.state.suggestedArtists.map(artist=>
            <a href='#' className='list-group-item' key={artist.id}>{artist.name}</a>
          )}
        </div>
      </div>
    );
  }
})

React.render(
  <EchoSuggest />, document.querySelector('.container')
)

export default EchoSuggest;