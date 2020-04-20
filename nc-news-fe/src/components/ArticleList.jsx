import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import { stringToTitleCase } from '../utils/utils';
import Loading from './Loading';
import Dropdown from './Dropdown';
import { StyledMain, StyledH2 } from '../styles/MainStyles';
import ErrorPage from './ErrorPage';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    isError: null
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
    const { articles, isLoading, isError } = this.state;
    if (isLoading) return <Loading />;
    if (isError) return <ErrorPage err={isError} />;
    return (
      <StyledMain>
        <StyledH2>
          {stringToTitleCase(this.props.topic_slug) || 'All'} Articles
        </StyledH2>
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
    try {
      const articles = await api.getArticles(topic, sort_by, order);
      this.setState({ articles, isLoading: false, isError: null });
    } catch ({ response: { data, status } }) {
      this.setState({
        isError: { msg: data.msg, status },
        isLoading: false
      });
    }
  };
}

export default ArticleList;
