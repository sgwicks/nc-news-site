import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from './Loading';

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticleById(this.props.article_id);
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    const {
      title,
      topic,
      author,
      created_at,
      votes,
      comments,
      body
    } = this.state.article;

    return (
      <article>
        <h2>{title}</h2>
        <p>
          in {topic}, by {author}, written {created_at.slice(0, 10)}
        </p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <p>Comments: {comments}</p>
      </article>
    );
  }

  fetchArticleById = async (article_id) => {
    const article = await api.getArticleById(article_id);
    this.setState({ article, isLoading: false });
  };
}

export default Article;
