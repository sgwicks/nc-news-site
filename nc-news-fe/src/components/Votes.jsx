import React, { Component } from 'react';

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
    this.setState((currentState) => {
      return { votes: currentState.votes + num };
    });
  };
}

export default Votes;
