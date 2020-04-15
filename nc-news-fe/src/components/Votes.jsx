import React, { Component } from 'react';
import * as api from '../utils/api';

class Votes extends Component {
  state = {
    votes: null
  };

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }

  render() {
    const { votes } = this.state;
    return (
      <section>
        Votes:
        <button onClick={() => this.handleClick(-1)}>-</button>
        {votes}
        <button onClick={() => this.handleClick(1)}>+</button>
      </section>
    );
  }

  handleClick = (num) => {
    const { type, id } = this.props;
    this.setState((currentState) => {
      return { votes: currentState.votes + num };
    });
    api.patchVotesById(type, id, num);
  };
}

export default Votes;
