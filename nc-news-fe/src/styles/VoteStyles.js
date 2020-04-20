import styled from 'styled-components';

export const VotesSection = styled.section`
  @media only screen and (min-width: 768px) {
    ${({ type }) =>
      type === 'comments' &&
      'grid-area: CommentVotes; display:flex; flex-direction:column; align-items: center;'}
  }

  justify-self: center;
`;

export const VoteUp = styled.button`
  @media only screen and (max-width: 768px) {
    ${({ type }) => type === 'comments' && 'margin: 5px;'}
  }

  ${({ type }) => (type === 'comments' ? 'order: 1' : 'margin: 0 5px;')}
`;

export const VoteCount = styled.span`
  ${({ type }) => (type === 'comments' ? 'order: 2' : 'margin: 0 5px;')}
`;

export const VoteDown = styled.button`
  @media only screen and (max-width: 768px) {
    ${({ type }) => type === 'comments' && 'margin: 0 5px;'}
  }
  ${({ type }) => (type === 'comments' ? 'order: 3' : 'margin: 5px;')}
`;
