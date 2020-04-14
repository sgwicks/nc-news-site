import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from './Loading';
import ArticleText from './ArticleText';
import Votes from './Votes';
import CommentList from './CommentList';
import ArticleInfo from './ArticleInfo';

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
      body,
      article_id
    } = this.state.article;

    return (
      <article>
        <ArticleInfo
          title={title}
          topic={topic}
          author={author}
          created_at={created_at}
        />
        <ArticleText body={body} />
        <Votes votes={votes} />
        <CommentList comment_count={comment_count} article_id={article_id} />
      </article>
    );
  }

  fetchArticleById = async (article_id) => {
    const article = await api.getArticleById(article_id);
    this.setState({ article, isLoading: false });
  };
}

export default Article;
