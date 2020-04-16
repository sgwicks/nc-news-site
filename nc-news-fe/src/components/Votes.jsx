import React, { Component } from 'react';
import * as api from '../utils/api';

class Votes extends Component {
  state = {
    voted: 0,
    isError: null
  };

  render() {
    const { voted, isError } = this.state;
    const { votes } = this.props;
    return (
      <section>
        Votes:
        <button onClick={() => this.handleClick(-1)} disabled={voted < 0}>
          -
        </button>
        {votes + voted}
        <button onClick={() => this.handleClick(1)} disabled={voted > 0}>
          +
        </button>
        {isError && (
          <p style={{ color: 'red' }}>
            Something went wrong. Please try again later
          </p>
        )}
      </section>
    );
  }

  handleClick = async (num) => {
    const { type, id } = this.props;
    this.setState((currentState) => {
      return {
        isError: null,
        voted: currentState.voted + num
      };
    });
    try {
      await api.patchVotesById(type, id, num);
    } catch (err) {
      this.setState({ isError: true, voted: 0 });
    }
  };
}

export default Votes;
