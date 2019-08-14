import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import {VideoList, VideoDetail, SearchBar} from './components'
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params:{
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyC39aOl5EMwHHI_OTTF63VPoLRjv7WznAE',
          q: searchTerm
      }
    })
    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
  }

  render () {
      const {selectedVideo} = this.state
    return (
      <Grid style={{justifyContent: 'center'}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}> 
              <SearchBar onFormSubmit = {this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default App
