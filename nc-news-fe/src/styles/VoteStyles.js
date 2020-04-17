import styled from 'styled-components';

export const VotesSection = styled.section`
  ${({ type }) =>
    type === 'comments' &&
    'grid-area: CommentVotes; display:flex; flex-direction:column; align-items: center;'}
`;

export const VoteUp = styled.button`
  ${({ type }) => (type === 'comments' ? 'order: 1' : 'margin: 0 5px;')}
`;

export const VoteCount = styled.span`
  ${({ type }) => (type === 'comments' ? 'order: 2' : 'margin: 0 5px;')}
`;

export const VoteDown = styled.button`
  ${({ type }) => (type === 'comments' ? 'order: 3' : 'margin: 0 5px;')}
`;
