import React from 'react';
import { stringToTitleCase } from '../utils/utils';
import { Link } from '@reach/router';

const ArticleCard = ({
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
  article_id
}) => {
  return (
    <Link to={`/articles/${article_id}`}>
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
    </Link>
  );
};

export default ArticleCard;
