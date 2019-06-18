import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './Dashboard.module.css';
import Balance from '../Balance/Balance';
import Controls from '../Controls/Controls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 5000,
    withdraw: 0,
    deposit: 0,
    amount: '',
  };

  handleChange = e => {
    this.setState({ amount: e.target.value });
  };

  handleClick = e => {
    const { value } = e.target;
    const { amount, balance } = this.state;
    const date = new Date();

    const transaction = {
      id: shortid.generate(),
      type: value,
      amount: parseFloat(amount),
      date: date.toLocaleString(),
    };

    if (transaction.type === 'withdraw' && balance < amount) {
      // eslint-disable-next-line no-alert
      alert('На счету недостаточно средств для проведения операции!');
    } else {
      this.setState(
        state => {
          state.history.push(transaction);
        },
        () => this.updateBalance(transaction),
      );
      this.resetInput();
    }
  };

  resetInput = () => {
    this.setState({ amount: '' });
  };

  updateBalance = transaction => {
    if (transaction.type === 'withdraw' && transaction.amount !== '') {
      this.setState(prevState => {
        return {
          withdraw: prevState.withdraw + transaction.amount,
          balance: prevState.balance - transaction.amount,
        };
      });
    } else if (transaction.type === 'deposit' && transaction.amount !== '') {
      this.setState(prevState => {
        return {
          deposit: prevState.deposit + transaction.amount,
          balance: prevState.balance + transaction.amount,
        };
      });
    }
  };

  render() {
    const { balance, deposit, withdraw, amount, history } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          onClick={this.handleClick}
          onChange={this.handleChange}
          value={amount}
        />
        <Balance balance={balance} deposit={deposit} withdraw={withdraw} />
        <TransactionHistory history={history} />
      </div>
    );
  }
}
