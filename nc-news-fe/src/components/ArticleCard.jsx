import React from 'react';
import { Link } from '@reach/router';
import ArticleInfo from './ArticleInfo';

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
        <ArticleInfo
          title={title}
          topic={topic}
          author={author}
          created_at={created_at}
        />
        <p className='ArticleCardVotes'>Votes: {votes}</p>
        <p className='ArticleCardComments'>Comments: {comment_count}</p>
      </section>
    </Link>
  );
};

export default ArticleCard;
