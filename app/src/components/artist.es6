import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import API from '../config'

let Artist = React.createClass({
  propTypes: {
    artistName: React.PropTypes.string.isRequired,
  },
  getInitialState(){
    return { songs: [] }
  },
  render(){
    let { songs } = this.state;
    return (
      <div className="form-group well">
        <h3>{this.props.artistName}</h3>
        <h4>Songs</h4>
        <div className="list-group">
          {songs.map(song=>{
            return (
              <span key={song.id}
                className='list-group-item'
              >{song.title}</span>
            );
          })}
        </div>
      </div>
    );
  },
  componentDidMount(){
    axios({
      method: 'GET',
      url: `${API.endpoint}/song/search`,
      params: {
        artist: this.props.artistName.replace(' ', '+', 'g'),
        api_key: API.api_key
      }
    }).then(({data})=>{
      this.setState({
        songs: data.response.songs
      })
    })
  }
})

export default Artist;