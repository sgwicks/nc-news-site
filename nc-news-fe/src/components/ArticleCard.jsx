import React from 'react';

const ArticleCard = () => {
  return (
    <section className='ArticleCard'>
      <div className='ArticleCardInfo'>
        <h2>Article Title</h2>
        <p>Article Info</p>
      </div>
      <p className='ArticleCardVotes'>Votes: 19</p>
      <p className='ArticleCardComments'>Comments: 2</p>
    </section>
  );
};

export default ArticleCard;
