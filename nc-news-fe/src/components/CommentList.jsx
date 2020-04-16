import React, { Component } from 'react';
import * as api from '../utils/api';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

class CommentList extends Component {
  state = {
    comments: [],
    comment_count: null,
    isLoading: true,
    isError: null
  };

  componentDidMount() {
    const { comment_count, article_id } = this.props;
    this.setState({ comment_count });
    this.fetchComments(article_id);
  }

  render() {
    const { comment_count, comments, isLoading, isError } = this.state;
    if (isLoading) return <Loading />;
    if (isError) return <ErrorPage />;

    return (
      <section>
        <h3>Comments ({comment_count})</h3>
        <CommentForm
          addComment={this.addComment}
          article_id={this.props.article_id}
          fetchComments={this.fetchComments}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <Comment
                key={`comment ${comment.comment_id}`}
                {...comment}
                fetchComments={this.fetchComments}
                article_id={this.props.article_id}
              />
            );
          })}
        </ul>
      </section>
    );
  }

  fetchComments = async (article_id) => {
    try {
      const comments = await api.getCommentsByArticleId(article_id);
      this.setState({ comments, isLoading: false });
    } catch (err) {
      this.setState({ isError: true, isLoading: false });
    }
  };

  addComment = (comment) => {
    this.setState((currentState) => {
      const commentList = [...currentState.comments];
      commentList.unshift(comment);
      return { ...currentState, comments: commentList };
    });
  };
}

export default CommentList;
