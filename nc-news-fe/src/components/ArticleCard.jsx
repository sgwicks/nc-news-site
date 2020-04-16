import React from 'react';
import ArticleInfo from './ArticleInfo';
import {
  StyledLink,
  Section,
  Votes,
  Comments
} from '../styles/ArticleCardStyles';

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
    <StyledLink to={`/articles/${article_id}`}>
      <Section>
        <ArticleInfo
          title={title}
          topic={topic}
          author={author}
          created_at={created_at}
          type={'card'}
        />
        <Votes>Votes: {votes}</Votes>
        <Comments>Comments: {comment_count}</Comments>
      </Section>
    </StyledLink>
  );
};

export default ArticleCard;
