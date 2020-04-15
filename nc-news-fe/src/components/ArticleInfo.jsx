import React from 'react';
import { stringToTitleCase } from '../utils/utils';

const ArticleInfo = ({ title, topic, author, created_at }) => {
  return (
    <div className='ArticleCardInfo'>
      <h3>{stringToTitleCase(title)}</h3>
      <p>
        in {stringToTitleCase(topic)}, by {author}, written{' '}
        {created_at.slice(0, 10)}
      </p>
    </div>
  );
};

export default ArticleInfo;
