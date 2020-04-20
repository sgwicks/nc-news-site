import React, { Component } from 'react';
import * as api from '../utils/api';
import {
  VotesSection,
  VoteUp,
  VoteDown,
  VoteCount
} from '../styles/VoteStyles';

class Votes extends Component {
  state = {
    voted: 0,
    isError: null
  };

  render() {
    const { voted, isError } = this.state;
    const { votes, type } = this.props;
    return (
      <VotesSection type={type}>
        Votes:
        <VoteDown
          type={type}
          onClick={() => this.handleClick(-1)}
          disabled={voted < 0}>
          -
        </VoteDown>
        <VoteCount type={type}>{votes + voted}</VoteCount>
        <VoteUp
          type={type}
          onClick={() => this.handleClick(1)}
          disabled={voted > 0}>
          +
        </VoteUp>
        {isError && (
          <p style={{ color: '#991100' }}>
            Something went wrong. Please try again later
          </p>
        )}
      </VotesSection>
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
