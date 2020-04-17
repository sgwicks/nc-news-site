import React from 'react';
import Votes from './Votes';
import * as api from '../utils/api';
import {
  StyledComment,
  DeleteButton,
  CommentAuthor,
  CommentBody,
  CommentDate
} from '../styles/CommentStyles';

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
        <CommentAuthor>{author}</CommentAuthor>
        <CommentBody>{body}</CommentBody>
        <CommentDate>
          Posted {created_at.slice(0, 10)}
          {author === 'happyamy2016' && (
            <DeleteButton onClick={handleClick}>Delete</DeleteButton>
          )}
        </CommentDate>
        <Votes votes={votes} type={'comments'} id={comment_id} />
      </StyledComment>
    </>
  );
};

export default Comment;
