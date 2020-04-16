import React, { Component } from 'react';
import {
  DropdownButton,
  DropdownOption,
  DropdownList
} from '../styles/DropdownStyles';

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
          <DropdownList>
            {options.map((option, i) => {
              const { sort_by, order } = option;
              return (
                <li key={`option-${i}`}>
                  <DropdownOption
                    onClick={() => {
                      fetchArticles(topic, sort_by, order);
                    }}
                    onMouseEnter={(event) =>
                      this.handleHover(event, 'blue', 'white')
                    }
                    onMouseLeave={(event) => this.handleHover(event, '', '')}>
                    {sort_by} ({order})
                  </DropdownOption>
                </li>
              );
            })}
          </DropdownList>
        )}
      </>
    );
  }

  handleHover = (event, bg, text) => {
    event.target.style.background = bg;
    event.target.style.color = text;
  };

  handleClick = () => {
    this.setState((currentState) => {
      return { isVisibile: !currentState.isVisibile };
    });
  };
}

export default Dropdown;
