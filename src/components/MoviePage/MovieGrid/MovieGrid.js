import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) => (
  <div className={styles.movieGrid}>
    {items.map(item => (
      <MovieGridItem
        key={item.id}
        title={item.title}
        posterUrl={item.posterUrl}
        overview={item.overview}
      />
    ))}
  </div>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
