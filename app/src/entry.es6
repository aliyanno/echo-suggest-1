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
      <div className='suggestion-app'>
        <input placeholder="Type an artist.." />
        <ul className="results">
          {this.state.suggestedArtists.map(artist=>
            <li key={artist.id}>{artist.name}</li>
          )}
        </ul>
      </div>
    );
  }
})

React.render(
  <EchoSuggest />, document.querySelector('.container')
)

export default EchoSuggest;