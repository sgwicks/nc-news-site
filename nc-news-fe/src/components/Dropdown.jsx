import React, { Component } from 'react';
import {
  DropdownButton,
  DropdownOption,
  DropdownList
} from '../styles/DropdownStyles';

class Dropdown extends Component {
  state = {
    isVisible: false,
    options: [
      { sort_by: 'created_at', order: 'asc', alias: 'Date' },
      { sort_by: 'created_at', order: 'desc', alias: 'Date' },
      { sort_by: 'comment_count', order: 'asc', alias: 'Comments' },
      { sort_by: 'comment_count', order: 'desc', alias: 'Comments' },
      { sort_by: 'votes', order: 'asc', alias: 'Votes' },
      { sort_by: 'votes', order: 'desc', alias: 'Votes' }
    ]
  };

  render() {
    const { isVisible, options } = this.state;
    const { fetchArticles, topic } = this.props;
    return (
      <>
        <DropdownButton
          onClick={this.handleClick}
          onMouseLeave={this.handleDropdownLeave}>
          Sort by:
          {isVisible && (
            <DropdownList>
              {options.map((option, i) => {
                const { sort_by, order, alias } = option;
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
                      {alias} ({order})
                    </DropdownOption>
                  </li>
                );
              })}
            </DropdownList>
          )}
        </DropdownButton>
      </>
    );
  }

  handleHover = (event, bg, text) => {
    event.target.style.background = bg;
    event.target.style.color = text;
  };

  handleClick = () => {
    this.setState((currentState) => {
      return { isVisible: !currentState.isVisible };
    });
  };

  handleDropdownLeave = () => {
    this.setState({ isVisible: false });
  };
}

export default Dropdown;
