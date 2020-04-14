import React, { Component } from 'react';

class CommentForm extends Component {
  state = {
    input: localStorage.getItem('input')
  };

  render() {
    return (
      <form>
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
    );
  }

  handleInput = (input) => {
    localStorage.setItem('input', input);
    this.setState({ input });
  };
}

export default CommentForm;
