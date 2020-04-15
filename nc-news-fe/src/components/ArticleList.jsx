import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import { stringToTitleCase } from '../utils/utils';
import Loading from './Loading';
import Dropdown from './Dropdown';
import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: grey;
  display: flex;
  flex-direction: column;
`;

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    const { topic_slug, sort_by, order } = this.props;
    this.fetchArticles(topic_slug, sort_by, order);
  }

  componentDidUpdate(prevProps) {
    const { topic_slug, sort_by, order } = this.props;
    if (prevProps.topic_slug !== topic_slug) {
      this.fetchArticles(topic_slug, sort_by, order);
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <StyledMain>
        <h2>{stringToTitleCase(this.props.topic_slug) || 'All'} Articles</h2>
        <Dropdown
          topic={this.props.topic_slug}
          fetchArticles={this.fetchArticles}
        />
        {articles.map((article) => {
          return (
            <ArticleCard key={`article ${article.article_id}`} {...article} />
          );
        })}
      </StyledMain>
    );
  }

  fetchArticles = async (topic, sort_by, order) => {
    const articles = await api.getArticles(topic, sort_by, order);
    this.setState({ articles, isLoading: false });
  };
}

export default ArticleList;
