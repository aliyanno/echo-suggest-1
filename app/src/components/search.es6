import React from 'react'

let Search = React.createClass({
  render(){
    return (
      <div className="form-group well">
        <input
          className='form-control'
          placeholder="Type an artist.."
        />
      </div>
    );
  }
})

export default Search;