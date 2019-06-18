import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';

export default class MoviePage extends Component {
  state = {
    filterWord: '',
    filteredList: this.props.items,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleChange = e => {
    const { value } = e.target;
    const { items } = this.props;

    this.setState({ filterWord: value }, () => {
      this.filter(items);
    });
  };

  filter(items) {
    const { filterWord } = this.state;

    this.setState({
      filteredList: items.filter(el =>
        el.title.toLowerCase().includes(filterWord.toLowerCase()),
      ),
    });
  }

  render() {
    const { filterWord, filteredList } = this.state;

    return (
      <div className={styles.container}>
        <SearchBar value={filterWord} onChange={this.handleChange} />
        <MovieGrid items={filteredList} />
      </div>
    );
  }
}
