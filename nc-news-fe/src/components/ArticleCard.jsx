import React from 'react';
import { stringToTitleCase } from '../utils/utils';

const ArticleCard = ({
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count
}) => {
  return (
    <section className='ArticleCard'>
      <div className='ArticleCardInfo'>
        <h2>{stringToTitleCase(title)}</h2>
        <p>
          in {stringToTitleCase(topic)}, by {author}, written{' '}
          {created_at.slice(0, 10)}
        </p>
      </div>
      <p className='ArticleCardVotes'>Votes: {votes}</p>
      <p className='ArticleCardComments'>Comments: {comment_count}</p>
    </section>
  );
};

export default ArticleCard;
