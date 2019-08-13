import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

class App extends Component{
  render(){
    return(
      <Grid style={{justifyContent: 'center'}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}> 
              {/** This is where search bar component will go */}
            </Grid>
            <Grid item xs={8}>
             {/** This is where Video Detail component will go */}
            </Grid>
            <Grid item xs={4}>
              {/** This is where VideoList component will go */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default App