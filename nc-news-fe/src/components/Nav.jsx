import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';
import { stringToTitleCase } from '../utils/utils';
import { Link } from '@reach/router';
import { StyledNav } from '../styles/AppStyles';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { isLoading, topics } = this.state;
    if (isLoading) return <Loading />;
    return (
      <StyledNav>
        {topics.map((topic, i) => {
          const { slug } = topic;
          return (
            <Link key={`topic-${i}`} to={`/topics/${slug}`}>
              {stringToTitleCase(slug) + ' | '}
            </Link>
          );
        })}
        <Link to='/articles'>All</Link>
      </StyledNav>
    );
  }

  fetchTopics = async () => {
    const topics = await api.getTopics();
    this.setState({ topics, isLoading: false });
  };
}

export default Nav;
