import React, { Component } from 'react';
import * as api from '../utils/api';
import { CommentInput, Form } from '../styles/CommentStyles';

class CommentForm extends Component {
  state = {
    input: localStorage.getItem('input'),
    comment: null,
    isError: null,
    submitIsEmpty: null
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* Converting to CSS later 
          width='500px' height='75px'*/}
          <CommentInput
            maxLength='250'
            onChange={(event) => {
              this.handleInput(event.target.value);
            }}
            value={this.state.input}
          />

          <button>Post a comment</button>
        </Form>
        {this.state.isError && (
          <p style={{ color: 'red' }}>
            Something went wrong, and your comment was not posted. Try again
            later.
          </p>
        )}
        {this.state.submitIsEmpty && (
          <p style={{ color: 'red' }}>
            You can't post an empty comment. Write something in the box and try
            again.
          </p>
        )}
      </>
    );
  }

  handleInput = (input) => {
    localStorage.setItem('input', input);
    this.setState({ input });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { input } = this.state;
    const author = 'happyamy2016'; // user must exist in database for successful POST
    const { addComment, fetchComments, article_id } = this.props;

    if (input) {
      const comment = {
        author,
        body: input,
        comment_id: Math.random(),
        votes: 0,
        created_at: new Date().toISOString()
      };
      addComment(comment);
      this.setState({ input: '', submitIsEmpty: false });
      try {
        await api.postCommentToArticleId(article_id, author, input);
        fetchComments(article_id);
        localStorage.setItem('input', '');
      } catch (err) {
        this.setState({ isError: true, input: localStorage.getItem('input') });
        fetchComments(article_id);
      }
    } else {
      this.setState({ submitIsEmpty: true });
    }
  };
}

export default CommentForm;
