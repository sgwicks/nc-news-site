import React from 'react';
import Votes from './Votes';
import * as api from '../utils/api';
import { StyledComment } from '../styles/CommentStyles';

const Comment = ({
  author,
  body,
  votes,
  created_at,
  comment_id,
  fetchComments,
  article_id
}) => {
  const handleClick = async () => {
    await api.deleteCommentById(comment_id);
    fetchComments(article_id);
  };

  return (
    <>
      <StyledComment>
        <strong>{author}</strong>
        <br />
        <br />
        {body}
        <br />
        <br />
        <em>Posted {created_at.slice(0, 10)}</em>
        {author === 'happyamy2016' && (
          <button onClick={handleClick}>Delete</button>
        )}
      </StyledComment>
      <Votes votes={votes} type={'comments'} id={comment_id} />
    </>
  );
};

export default Comment;
