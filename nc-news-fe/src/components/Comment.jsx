import React from 'react';
import Votes from './Votes';

const Comment = ({ author, body, votes, created_at, comment_id }) => {
  return (
    <>
      <p>
        {author}
        <br />
        {body}
        <br />
        Posted {created_at.slice(0, 10)}
      </p>
      <Votes votes={votes} type={'comments'} id={comment_id} />
    </>
  );
};

export default Comment;
