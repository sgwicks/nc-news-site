import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

class Articles extends Component {
  state = {
    articleList: [1, 2, 3, 4]
  };

  render() {
    const { articleList } = this.state;
    return (
      <main>
        {articleList.map((article) => {
          return <ArticleCard />;
        })}
      </main>
    );
  }
}

export default Articles;
