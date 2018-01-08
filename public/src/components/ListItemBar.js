import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddLike } from '../actions/blogs';


export class ListItemBar extends React.Component {

    state = {
        liked: false
    }


    setStartAddLike = () => {
        let totalLike = this.props.likes + 1;
        if (this.state.liked === false) {
                this.props.startAddLike(this.props.id , {likes: totalLike});
                this.setState(() => ({ liked: true }));
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
}

const mapDispatchToProps = (dispatch , props) => ({
    startAddLike: (id , addCount) => dispatch(startAddLike(id , addCount))
})

export default connect(undefined , mapDispatchToProps)(ListItemBar);