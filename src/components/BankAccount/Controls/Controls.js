import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onClick, onChange, value }) => (
  <section className={styles.controls}>
    <input
      className={styles.input}
      onChange={onChange}
      type="number"
      value={value}
    />
    <button
      className={styles.btn}
      onClick={onClick}
      type="button"
      value="deposit"
    >
      Deposit
    </button>
    <button
      className={styles.btn}
      onClick={onClick}
      type="button"
      value="withdraw"
    >
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Controls;
