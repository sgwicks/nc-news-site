import React, { Component } from 'react';

class CommentList extends Component {
  state = {
    commentList: [],
    comment_count: null
  };

  componentDidMount() {
    this.setState({ comment_count: this.props.comment_count });
  }

  render() {
    const { comment_count } = this.state;
    return (
      <section>
        <h3>Comments ({comment_count})</h3>
      </section>
    );
  }
}

export default CommentList;
