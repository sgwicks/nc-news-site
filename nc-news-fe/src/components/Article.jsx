import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <article>
        <h2>Article Title</h2>
        <p>in Topic, by Author, written yyyy-mm-dd</p>
        <p>Article Body</p>
      </article>
    );
  }
}

export default Article;
