import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'ArticleCardInfo ArticleCardVotes'
    'ArticleCardInfo ArticleCardComments';
  margin: 20px 0;
  width: 75%;
`;

export const Votes = styled.p`
  grid-area: ArticleCardVotes;
  margin: 0;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Comments = styled.p`
  grid-area: ArticleCardComments;
  margin: 0;
  background-color: goldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  ${(props) =>
    props.type === 'card'
      ? 'border: 2px solid red'
      : 'border: 2px solid green'};
  grid-area: ArticleCardInfo;
  padding: 0 20px;
`;
