import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddLike } from '../actions/blogs';


export class ListItemBar extends React.Component {

    setStartAddLike = () => {
        let addLike = this.props.likes + 1;
        let totalLikeId = this.props.userLikes;
        let userLikeId = this.props.userId;
        
        if (!totalLikeId.includes(userLikeId)) {
                totalLikeId.push(userLikeId);
                this.props.startAddLike(this.props.id , {likes: addLike , userLikes: totalLikeId})
            } 
        };

    
    
    render() {
        return (
        <div>
            <div  className="item-bar" >
                {this.props.isAuthenticated === this.props.uid
                && 
                <Link className="list-item__remove item-button" to={`/edit/${this.props.id}`}><span >Edit</span></Link>
                }
                <button className="item-button" onClick={this.setStartAddLike}>{this.props.likes}{this.props.likes > 0 ? ' Likes' : ' Like'}</button>
            </div>
        </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        userId: state.auth.uid
    }
}

const mapDispatchToProps = (dispatch , props) => ({
    startAddLike: (id , addCount) => dispatch(startAddLike(id , addCount))
})

export default connect(mapStateToProps , mapDispatchToProps)(ListItemBar);