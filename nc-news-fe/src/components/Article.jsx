import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from './Loading';
import Votes from './Votes';
import CommentList from './CommentList';
import ArticleInfo from './ArticleInfo';
import ErrorPage from './ErrorPage';
import { StyledMain, StyledArticle } from '../styles/MainStyles';

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    isError: null
  };

  componentDidMount() {
    this.fetchArticleById(this.props.article_id);
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.isError) return <ErrorPage />;

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
      <StyledMain>
        <StyledArticle>
          <ArticleInfo
            title={title}
            topic={topic}
            author={author}
            created_at={created_at}
          />
          <p>{body}</p>
        </StyledArticle>
        <Votes votes={votes} type={'articles'} id={article_id} />
        <CommentList comment_count={comment_count} article_id={article_id} />
      </StyledMain>
    );
  }

  fetchArticleById = async (article_id) => {
    try {
      const article = await api.getArticleById(article_id);
      this.setState({ article, isLoading: false });
    } catch (err) {
      this.setState({ isError: true, isLoading: false });
    }
  };
}

export default Article;
