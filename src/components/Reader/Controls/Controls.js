import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onClick, disabledPrev, disabledNext }) => (
  <div className={styles.wrapper}>
    <button
      className={styles.btn}
      onClick={onClick}
      type="button"
      value="prev"
      disabled={disabledPrev}
    >
      {'<'}
    </button>
    <button
      className={styles.btn}
      onClick={onClick}
      type="button"
      value="next"
      disabled={disabledNext}
    >
      {'>'}
    </button>
  </div>
);

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabledPrev: PropTypes.string.isRequired,
  disabledNext: PropTypes.string.isRequired,
};

export default Controls;
