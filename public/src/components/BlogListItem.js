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
                    <div className="bloggle-user-info">
                        <div>
                            <Link to={`/profile/${this.props.uid}`}><div className="portrait" >{this.props.userImage !== '' ? <img className="list-image" src={this.props.userImage} /> : <img className="list-image" src="http://www.theeaglefan.com/ELB/Anonymous.jpg" />}</div></Link>
                        </div>
                        <div>
                            <h3 className="list-item__title">{this.props.title}</h3>
                            <Link to={`/profile/${this.props.uid}`} className="no-decoration"><p className="list-item__sub-title">By {this.props.username}</p></Link>
                            <p className="list-item__date">{moment(this.props.createdAt).format( 'MMMM Do, YYYY h:mm:ss a')}</p>
                        </div>
                    </div>
                    <div className="bloggle-comment">
                        <h3 className="list-item__data">{this.props.blog}</h3>
                    </div>
                    <ListItemBar id={this.props.id} uid={this.props.uid} isAuthenticated={this.props.isAuthenticated} likes={this.props.likes} userLikes={this.props.userLikes}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
})

export default connect(mapStateToProps)(BlogListItem);

