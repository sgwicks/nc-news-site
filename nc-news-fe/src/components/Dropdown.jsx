import React, { Component } from 'react';
import DropdownOption from './DropdownOption';
import styled from 'styled-components';

const DropdownButton = styled.button`
  flex-basis: 50%;
`;

class Dropdown extends Component {
  state = {
    isVisibile: false,
    options: [
      { sort_by: 'created_at', order: 'asc' },
      { sort_by: 'created_at', order: 'desc' },
      { sort_by: 'comment_count', order: 'asc' },
      { sort_by: 'comment_count', order: 'desc' },
      { sort_by: 'votes', order: 'asc' },
      { sort_by: 'votes', order: 'desc' }
    ]
  };

  render() {
    const { isVisibile, options } = this.state;
    const { fetchArticles, topic } = this.props;
    return (
      <>
        <DropdownButton onClick={this.handleClick}>Sort by:</DropdownButton>
        {isVisibile && (
          <ul>
            {options.map((option, i) => {
              const { sort_by, order } = option;
              return (
                <li key={`option-${i}`}>
                  <DropdownOption
                    topic={topic}
                    sort_by={sort_by}
                    order={order}
                    fetchArticles={fetchArticles}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }

  handleClick = () => {
    this.setState((currentState) => {
      return { isVisibile: !currentState.isVisibile };
    });
  };
}

export default Dropdown;
