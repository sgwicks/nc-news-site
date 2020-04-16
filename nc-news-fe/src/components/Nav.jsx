import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';
import { stringToTitleCase } from '../utils/utils';
import { StyledNav, NavLink } from '../styles/NavStyles';

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
            <NavLink key={`topic-${i}`} to={`/topics/${slug}`} i={i}>
              {stringToTitleCase(slug)}
            </NavLink>
          );
        })}
        <NavLink to='/articles' i={topics.length}>
          All
        </NavLink>
      </StyledNav>
    );
  }

  fetchTopics = async () => {
    const topics = await api.getTopics();
    this.setState({ topics, isLoading: false });
  };
}

export default Nav;
