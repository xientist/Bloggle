import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import ListItemBar from './ListItemBar';
import { connect } from 'react-redux';
import database from '../firebase/firebase';

const BlogListItem = ( { id , title , blog , createdAt , uid , likes , isAuthenticated , likesID } ) => (

    <div  className="list-item">
        <div>
            <h3 className="list-item__title">{title}</h3>
            <p className="list-item__sub-title">By </p>
            <span className="list-item__sub-title">{moment(createdAt).format( 'MMMM Do, YYYY h:mm:ss a')}</span>
            <h3 className="list-item__data">{blog}</h3>
            <ListItemBar id={id} uid={uid} isAuthenticated={isAuthenticated} likes={likes} likesID={likesID}/>
        </div>
    </div>
        
     
);


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
})

export default connect(mapStateToProps)(BlogListItem);

