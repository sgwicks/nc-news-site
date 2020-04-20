import styled from 'styled-components';

export const StyledMain = styled.main`
  background: #eee;
  display: flex;
  flex-direction: column;
`;

export const StyledH2 = styled.h2``;

export const StyledArticle = styled.article`
  @media only screen and (min-width: 768px) {
    max-width: 80%;
  }

  border: solid black 2px;
  background: white;
  margin: 20px 0;
  padding: 0 40px 20px 40px;
  text-align: left;
  align-self: center;
`;
