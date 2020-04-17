import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const Section = styled.section`
  background: white;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'ArticleCardInfo ArticleCardVotes'
    'ArticleCardInfo ArticleCardComments';
  margin: 20px 0;
  width: 80%;
`;

export const Votes = styled.p`
  grid-area: ArticleCardVotes;
  margin: 0;
  border: solid black 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Comments = styled.p`
  grid-area: ArticleCardComments;
  margin: 0;
  border: solid black 2px;
  border-top: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  padding: 0 20px;
  ${(props) =>
    props.type === 'card'
      ? 'border: 2px solid black; border-right: 0; grid-area: ArticleCardInfo;'
      : 'padding-bottom: 10px; text-align: center;'};
  h3 {
    margin-bottom: 0;
  }
  p {
    font-size: 75%;

    padding: 0;
  }
`;
