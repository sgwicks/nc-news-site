import styled from 'styled-components';

export const CommentSection = styled.section`
  background: white;
  border: solid black 2px;
  max-width: 80%;
  align-self: center;
  padding: 0 40px 20px 40px;
  margin: 20px 0;
`;

export const CommentUL = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CommentInput = styled.textarea`
  height: 75px;
  margin-bottom: 15px;
`;

export const StyledComment = styled.div`
  font-size: 90%;
  border: solid grey 1px;
  padding: 10px 20px;
  box-shadow: 5px 5px grey;
  display: grid;
  grid-template-columns: auto 75px;
  grid-template-rows: auto;
  grid-template-areas:
    'CommentAuthor CommentVotes'
    'CommentBody CommentVotes'
    'CommentDate CommentVotes';
  align-items: start;
  margin: 10px 0;
`;

export const CommentAuthor = styled.p`
  grid-area: CommentAuthor;
  margin: 0;
  padding: 0;
`;
export const CommentBody = styled.p`
  grid-area: CommentBody;
  margin: 5px 0;
  padding: 0;
`;
export const CommentDate = styled.p`
  grid-area: CommentDate;
  margin: 0;
  padding: 0;
`;

export const DeleteButton = styled.button`
  margin-left: 5px;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;
