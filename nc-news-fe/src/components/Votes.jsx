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
    return <section>Votes: {votes}</section>;
  }
}

export default Votes;
