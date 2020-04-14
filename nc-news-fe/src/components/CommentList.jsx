import React, { Component } from 'react';
import * as api from '../utils/api';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  state = {
    comments: [],
    comment_count: null
  };

  componentDidMount() {
    const { comment_count, article_id } = this.props;
    this.setState({ comment_count });
    this.fetchComments(article_id);
  }

  render() {
    const { comment_count, comments } = this.state;
    return (
      <section>
        <h3>Comments ({comment_count})</h3>
        <CommentForm addComment={this.addComment} />
        <ul>
          {comments.map((comment) => {
            return (
              <Comment key={`comment ${comment.comment_id}`} {...comment} />
            );
          })}
        </ul>
      </section>
    );
  }

  fetchComments = async (article_id) => {
    const comments = await api.getCommentsByArticleId(article_id);
    this.setState({ comments });
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
