import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';

const ExpenseListItem = ( { id , description , note , createdAt , uid ,  isAuthenticated } ) => (

    <div  className="list-item">
        <div>
            <div className="list-item__header">
                <h3 className="list-item__title">{description}</h3>
                {isAuthenticated === uid && <Link className="list-item__remove" to={`/edit/${id}`}><span >Remove</span></Link>}
            </div>
            <span className="list-item__sub-title">{moment(createdAt).format( 'MMMM Do, YYYY h:mm:ss a')}</span>
            <h3 className="list-item__data">{note}</h3>
        </div>
    </div>
        
     
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
})

export default connect(mapStateToProps)(ExpenseListItem);

