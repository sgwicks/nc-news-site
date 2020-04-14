import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from './Loading';
import ArticleText from './ArticleText';
import Votes from './Votes';
import CommentList from './CommentList';

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
      comment_count,
      body
    } = this.state.article;

    console.log(comment_count);
    return (
      <article>
        <h2>{title}</h2>
        <p>
          in {topic}, by {author}, written {created_at.slice(0, 10)}
        </p>
        <ArticleText body={body} />
        <Votes votes={votes} />
        <CommentList comment_count={comment_count} />
      </article>
    );
  }

  fetchArticleById = async (article_id) => {
    const article = await api.getArticleById(article_id);
    this.setState({ article, isLoading: false });
  };
}

export default Article;
