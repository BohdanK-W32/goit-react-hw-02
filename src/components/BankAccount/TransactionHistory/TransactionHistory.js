import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th className={styles.th}>Transaction</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map(transaction => (
        <tr key={transaction.id}>
          <td className={styles.type}>{transaction.type}</td>
          <td>{transaction.amount}$</td>
          <td>{transaction.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
