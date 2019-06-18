import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ current, all }) => (
  <p className={styles.counter}>
    {current}/{all}
  </p>
);

Counter.propTypes = {
  current: PropTypes.number.isRequired,
  all: PropTypes.number.isRequired,
};

export default Counter;
