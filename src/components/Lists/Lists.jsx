import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`

  `

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      movies:["List1", "List2", "List3"],
      spotify:["List1"],
      showMovies:false,
      showSpotify:false
    };
  }

  clickMovies =() => {
    this.setState({
      showMovies:!this.state.showMovies
    })
  }

  clickSpotify =() => {
    this.setState({
      showSpotify:!this.state.showSpotify
    })
  }

  render() {
    const movieList = this.state.movies.map((movie) => <li key={movie}>{movie}</li>);
    const spotifyList = this.state.spotify.map((spotify) => <li key={spotify}>{spotify}</li>);
    return (
      <Container>
        <ul>
          <li>
            <p onClick={this.clickMovies}>Movies</p>
            {this.state.showMovies ? 
              <ul>
                {movieList}
              </ul>
              :
              null
            }
          </li>
          <li>
            <p onClick={this.clickSpotify}>Spotify</p>
            {this.state.showSpotify ? 
              <ul>
                {spotifyList}
              </ul>
              :
              null
            }
          </li>
        </ul>
      </Container>
    )
  }
}

export default withRouter(Lists);