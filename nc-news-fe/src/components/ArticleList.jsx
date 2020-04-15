import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import { stringToTitleCase } from '../utils/utils';

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.fetchArticles(this.props.topic_slug);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.fetchArticles(this.props.topic_slug);
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <main>
        <h2>{stringToTitleCase(this.props.topic_slug) || 'All'} Articles</h2>
        {articles.map((article) => {
          return (
            <ArticleCard key={`article ${article.article_id}`} {...article} />
          );
        })}
      </main>
    );
  }

  fetchArticles = async (topic) => {
    const articles = await api.getArticles(topic);
    this.setState({ articles });
  };
}

export default ArticleList;
