import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { startAddExpenses } from '../actions/expenses';

export class ExpenseSummary extends React.Component {  

    onSubmit = (expense) => {
        this.props.startAddExpenses(expense);
    }


    render() {
        return (
                <div className="page-header">
                    <div className="content-container">
                        <ExpenseForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            );
    };
};



const mapDispatchToProps = (dispatch) => ({ startAddExpenses: (expense) => dispatch(startAddExpenses(expense)) });

export default connect(undefined , mapDispatchToProps)(ExpenseSummary);