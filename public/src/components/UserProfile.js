import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import BlogListItem from './BlogListItem';
import dateSorter from '../selectors/date-sorter';

class UserProfile extends React.Component {

    userInfo = () => {
        let user = this.props.users.find((user) => user.id === this.props.bloggle.uid);
        return user;
    }
    
    userBlogs = () => {
        let user = this.userInfo();
        let userBlogs = this.props.bloggles.filter((blog) => blog.uid === user.id);
        return userBlogs;
    }

    blogCount = () => {
        let blogCount = this.userBlogs().length;
        return blogCount;
    }

    totalLikes = () => {
        let user = this.props.users.find((user) => user.id === this.props.bloggle.uid);
        let userBlogs = this.props.bloggles.filter((blog) => blog.uid === user.id);
        return userBlogs.reduce((a, b) => { return  a + b['likes'] }, 0);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content-container settings">
                    <h3>{this.userInfo().username}</h3>
                    <div className="portrait">
                        {this.userInfo().userImage !== '' ? <img className="profile-image" src={this.userInfo().userImage} /> : <img className="profile-image" src="http://www.theeaglefan.com/ELB/Anonymous.jpg" />}
                    </div>
                    <div className="user-info">
                        <h3>User information: </h3>
                        <p>Total Bloggles: {this.blogCount()}</p>
                        <p>Total Likes: {this.totalLikes()}</p>
                        <p>*user inputted description*</p>
                    </div>
                    <div className="list-header"> 
                        <div className="show-for-mobile">{this.userInfo().username}'s Bloggles</div>
                        <div className="show-for-desktop">{this.userInfo().username}'s Bloggles</div>
                    </div>
                    <div className="list-body">
                        {
                            this.userBlogs().length === 0 ? (
                                <div className="list-item list-item--message">
                                    <span> No Bloggles </span>
                                </div>
                            ) : (
                                this.userBlogs().map((bloggle) => {
                                    return <BlogListItem key={bloggle.id} {...bloggle} />
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state , props) => {
    return {
        bloggle: state.bloggles.find((bloggle) =>  bloggle.uid === props.match.params.id),
        bloggles: dateSorter(state.bloggles),
        users: state.users
    };
};



export default connect(mapStateToProps, undefined)(UserProfile);