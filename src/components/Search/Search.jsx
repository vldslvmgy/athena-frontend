import React, { Component } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import MediaCard from './MediaCard';

const SEARCH_MEDIA = gql`
  query mediaSearch($search: String!){
    mediaSearch(
      search: $search
    ) {
      type
      id
      name
    }
  }
`;

const Loader = styled.div`
  margin-top: 10px;
  margin-left: 40%;
`;

const styles = () => ({
  mediaResults: {
    'margin-left': '20%',
    'margin-top': '5%'
  },
});

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    if (this.props.location) {
      const searchTerm = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
      this.setState({ search: searchTerm.k });
    }
  }

  componentDidUpdate = () => {
    const searchTerm = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    if (searchTerm.k !== this.state.search) {
      this.setState({ search: searchTerm.k });
    }
  }

  render() {
    const { classes } = this.props;
    const { search } = this.state;
    return (
      <List className={classes.mediaResults}>
        <Query
          query={SEARCH_MEDIA}
          variables={{ search }}
        >
          {({ loading, data }) => {
            const mediaCards = [];
            if (data.mediaSearch) {
              data.mediaSearch.forEach((media) => {
                mediaCards.push(<MediaCard media={media} key={media.id} />);
              });
            }
            return (
              <div>
                {loading && (
                <Loader>
                  <CircularProgress
                    className="loading"
                  />
                </Loader>
                )}
                {
                  mediaCards
                }
              </div>
            );
          }}
        </Query>
      </List>
    );
  }
}

export default withStyles(styles)(withRouter(Search));
