import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';


export const ExpenseList = (props) => (
    <div className="content-container">
       <div className="list-header"> 
            <div className="show-for-mobile">Bloggles</div>
            <div className="show-for-desktop">Bloggles</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span> No Bloggles </span>
                    </div>
                ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses 
    };
};



export default connect(mapStateToProps)(ExpenseList);

