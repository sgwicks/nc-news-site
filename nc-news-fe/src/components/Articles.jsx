import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { articles } = this.state;
    return (
      <main>
        {articles.map((article) => {
          return (
            <ArticleCard key={`article ${article.article_id}`} {...article} />
          );
        })}
      </main>
    );
  }

  fetchArticles = async () => {
    const articles = await api.getArticles();
    this.setState({ articles });
  };
}

export default Articles;
