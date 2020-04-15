import React from 'react';
import Votes from './Votes';
import * as api from '../utils/api';

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
      <p>
        {author}
        <br />
        {body}
        <br />
        Posted {created_at.slice(0, 10)}
        <br />
        {author === 'happyamy2016' && (
          <button onClick={handleClick}>Delete</button>
        )}
      </p>
      <Votes votes={votes} type={'comments'} id={comment_id} />
    </>
  );
};

export default Comment;
