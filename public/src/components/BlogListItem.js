import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import ListItemBar from './ListItemBar';
import { connect } from 'react-redux';
import database from '../firebase/firebase';

class BlogListItem extends React.Component {


    render() {
        return (
            <div  className="list-item">
                <div>
                    <h3 className="list-item__title">{this.props.title}</h3>
                    <div className="portrait" >{this.props.userImage !== undefined ? <img className="list-image" src={this.props.userImage} /> : <img className="list-image" src="http://www.theeaglefan.com/ELB/Anonymous.jpg" />}</div>
                    <p className="list-item__sub-title">By {this.props.username}</p>
                    <span className="list-item__sub-title">{moment(this.props.createdAt).format( 'MMMM Do, YYYY h:mm:ss a')}</span>
                    <h3 className="list-item__data">{this.props.blog}</h3>
                    <ListItemBar id={this.props.id} uid={this.props.uid} isAuthenticated={this.props.isAuthenticated} likes={this.props.likes} likesID={this.props.likesID}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
})

export default connect(mapStateToProps)(BlogListItem);

