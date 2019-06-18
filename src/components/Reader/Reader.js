import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  state = {
    currentPage: 0,
  };

  handleClick = e => {
    switch (e.target.value) {
      case 'next':
        this.onNext();
        break;

      case 'prev':
        this.onPrev();
        break;

      default:
        break;
    }
  };

  onNext = () => {
    let { currentPage } = this.state;
    this.setState({ currentPage: (currentPage += 1) });
  };

  onPrev = () => {
    let { currentPage } = this.state;
    this.setState({ currentPage: (currentPage -= 1) });
  };

  render() {
    const { currentPage } = this.state;
    const current = currentPage + 1;
    const { items } = this.props;
    return (
      <div className="reader">
        <Publication publication={items[currentPage]} />
        <Counter current={current} all={items.length} />
        <Controls
          onClick={this.handleClick}
          disabledPrev={currentPage === 0 ? 'disabled' : ''}
          disabledNext={current === items.length ? 'disabled' : ''}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
