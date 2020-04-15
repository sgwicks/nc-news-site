import React from 'react';

const DropdownOption = ({ topic, sort_by, order, fetchArticles }) => {
  return (
    <button
      onClick={() => {
        fetchArticles(topic, sort_by, order);
      }}>
      {sort_by} ({order})
    </button>
  );
};

export default DropdownOption;
