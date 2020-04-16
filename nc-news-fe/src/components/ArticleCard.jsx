import React from 'react';
import ArticleInfo from './ArticleInfo';
import * as CardStyles from '../styles/ArticleCardStyles';

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
    <CardStyles.StyledLink to={`/articles/${article_id}`}>
      <CardStyles.Section>
        <ArticleInfo
          title={title}
          topic={topic}
          author={author}
          created_at={created_at}
          type={'card'}
        />
        <CardStyles.Votes>Votes: {votes}</CardStyles.Votes>
        <CardStyles.Comments>Comments: {comment_count}</CardStyles.Comments>
      </CardStyles.Section>
    </CardStyles.StyledLink>
  );
};

export default ArticleCard;
