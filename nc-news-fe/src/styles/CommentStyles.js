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
  align-items: baseline;
  text-align: left;
  margin: 0;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CommentInput = styled.textarea`
  height: 75px;
  margin-bottom: 15px;
`;
