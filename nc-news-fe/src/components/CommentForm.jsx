import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentForm extends Component {
  state = {
    input: localStorage.getItem('input'),
    comment: null,
    isError: null
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* Converting to CSS later 
          width='500px' height='75px'*/}
            <textarea
              maxLength='250'
              onChange={(event) => {
                this.handleInput(event.target.value);
              }}
              value={this.state.input}
            />
          </label>
          <br />
          <button>Post a comment</button>
        </form>
        {this.state.isError && (
          <p style={{ color: 'red' }}>
            Something went wrong, and your comment was not posted. Try again
            later.
          </p>
        )}
      </>
    );
  }

  handleInput = (input) => {
    localStorage.setItem('input', input);
    this.setState({ input });
  };

  handleSubmit = (event) => {
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
      this.setState({ input: '' });
      localStorage.setItem('input', '');
      api
        .postCommentToArticleId(article_id, author, input)
        .then(() => {
          fetchComments(article_id);
        })
        .catch((err) => {
          this.setState({ isError: true });
          fetchComments(article_id);
        });
    }
  };
}

export default CommentForm;
