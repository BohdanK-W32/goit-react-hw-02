import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, deposit, withdraw }) => (
  <section className={styles.balance}>
    <span className={styles.value}>
      <span role="img" aria-label="deposit">
        🔼
      </span>{' '}
      {deposit}$
    </span>
    <span>
      <span role="img" aria-label="withdraw">
        🔽
      </span>{' '}
      {withdraw}$
    </span>
    <span className={styles.value}>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  withdraw: PropTypes.number.isRequired,
};

export default Balance;
