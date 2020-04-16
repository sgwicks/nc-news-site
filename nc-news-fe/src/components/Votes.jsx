import React, { Component } from 'react';
import * as api from '../utils/api';

class Votes extends Component {
  state = {
    votes: null,
    voted: 0
  };

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }

  render() {
    const { votes, voted } = this.state;
    return (
      <section>
        Votes:
        <button onClick={() => this.handleClick(-1)} disabled={voted < 0}>
          -
        </button>
        {votes}
        <button onClick={() => this.handleClick(1)} disabled={voted > 0}>
          +
        </button>
      </section>
    );
  }

  handleClick = (num) => {
    const { type, id } = this.props;
    this.setState((currentState) => {
      return {
        votes: currentState.votes + num,
        voted: currentState.voted + num
      };
    });
    api.patchVotesById(type, id, num);
  };
}

export default Votes;
