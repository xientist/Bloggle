import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class UserProfile extends React.Component {
    blogCount = () => {
        let user = this.props.users.find((user) => user.id === this.props.bloggle.uid);
        let blogCount = this.props.blogCount.filter((blog) => blog.uid === user.id);
        return blogCount.length;
    }

    render() {
        return (
            <div>
                <div className="content-container">
                    <h3>{this.props.bloggle.username}</h3>
                    <div className="portrait" >
                        {this.props.bloggle.userImage !== '' ? <img className="list-image" src={this.props.bloggle.userImage} /> : <img className="list-image" src="http://www.theeaglefan.com/ELB/Anonymous.jpg" />}
                    </div>
                    <p>Total Bloggles: {this.blogCount()}</p>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state , props) => {
    return {
        bloggle: state.bloggles.find((bloggle) =>  bloggle.id === props.match.params.id),
        blogCount: state.bloggles,
        users: state.users
    };
};



export default connect(mapStateToProps, undefined)(UserProfile);