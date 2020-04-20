import React from 'react';
import { stringToTitleCase } from '../utils/utils';
import { Info } from '../styles/ArticleCardStyles';

const ArticleInfo = ({ title, topic, author, created_at, type }) => {
  return (
    <Info type={type}>
      {type === 'article' ? (
        <h2>{stringToTitleCase(title)}</h2>
      ) : (
        <h3>{stringToTitleCase(title)}</h3>
      )}
      <p>
        in {stringToTitleCase(topic)}, by {author}, written{' '}
        {created_at.slice(0, 10)}
      </p>
    </Info>
  );
};

export default ArticleInfo;
