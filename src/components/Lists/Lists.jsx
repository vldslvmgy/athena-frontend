import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import MovieList from '../MovieList';


//mock data
import movies from '../../mock-data/movies';

const Directory = styled.div`
  font-size: 16px;
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
`;

const ListEntry = styled.li`
  padding-top: 5px;
`;

const SidebarTitle = styled.p`
  cursor: pointer;
  margin: 0;
  padding-right: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  :hover {
    background-color: whitesmoke;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin-right: 100px;
`;

const Triangle = styled.i`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Year = styled.span`
  opacity: 0.6;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Section = styled.div`
  width: 100%;
`;



class Lists extends Component {
  constructor() {
    super();
    this.state = {
      listType: 'movie',
      movies: ["List1", "List2", "List3"],
      spotify: ["List1"],
      showMovies: false,
      showSpotify: false
    };
  }

  clickMovies = () => {
    this.setState({
      showMovies: !this.state.showMovies
    })
  }

  clickSpotify = () => {
    this.setState({
      showSpotify: !this.state.showSpotify
    })
  }

  render() {
    const { listType } = this.state;

    const movieList = this.state.movies.map((movie) => <ListEntry key={movie}>{movie}</ListEntry>);
    const spotifyList = this.state.spotify.map((spotify) => <ListEntry key={spotify}>{spotify}</ListEntry>);

    return (

      <Wrapper>
        <Section>

          <Directory>
            <StyledList className="fa-ul">
              <li>
                <span className="fa-li" >
                  {this.state.showMovies ?
                    <Triangle className="fas fa-caret-down"></Triangle>
                    :
                    <Triangle className="fas fa-caret-right"></Triangle>
                  }
                </span>
                <SidebarTitle onClick={this.clickMovies}>Movies</SidebarTitle>
                {this.state.showMovies ?
                  <ul>
                    {movieList}
                  </ul>
                  :
                  null
                }
              </li>
              <li>
                <span className="fa-li" >
                  {this.state.showSpotify ?
                    <Triangle className="fas fa-caret-down"></Triangle>
                    :
                    <Triangle className="fas fa-caret-right"></Triangle>
                  }
                </span>
                <SidebarTitle onClick={this.clickSpotify}>Spotify</SidebarTitle>
                {this.state.showSpotify ?
                  <ul>
                    {spotifyList}
                  </ul>
                  :
                  null
                }
              </li>
            </StyledList>
          </Directory>
        </Section>
        <Section>
          {listType === 'movie' ?
            <MovieList list={movies} />
            : null
          }
        </Section>
        <Section></Section>
      </Wrapper>
    )
  }
}

export default withRouter(Lists);