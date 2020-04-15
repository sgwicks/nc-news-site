import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentForm extends Component {
  state = {
    input: localStorage.getItem('input'),
    comment: null
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
    const author = 'happyamy2016';

    if (input) {
      const comment = {
        author,
        body: input,
        comment_id: Math.random(),
        votes: 0,
        created_at: new Date().toISOString()
      };
      this.props.addComment(comment);
      this.setState({ input: '' });
      localStorage.setItem('input', '');
      api.postCommentToArticleId(this.props.article_id, author, input);
    }
  };
}

export default CommentForm;