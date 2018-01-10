import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import database from '../firebase/firebase';

export class BloggleForm extends React.Component {

    setUsername = () => {
        database.ref(`users/usernames/${this.props.uid}`).once('value').then((snapshot) => {
            this.setState(() => ({username: snapshot.val().username }));
        })
    }

    setUserImage = () => {
        database.ref(`users/usernames/${this.props.uid}`).once('value').then((snapshot) => {
            console.log(snapshot.val().userImage);
            this.setState(() => ({userImage: snapshot.val().userImage }));
        })
    }


    constructor(props) {
        super(props);

        this.state = {
            title: props.bloggle ? props.bloggle.title : '',
            blog: props.bloggle ? props.bloggle.blog : '',
            createdAt: props.bloggle ? moment(props.bloggle.createdAt) : moment(),
            error: '',
            username: this.props.isAuthenticated && this.setUsername(),
            userImage: this.props.isAuthenticated && this.setUserImage()
        };
    }
    
    
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    onBlogChange = (e) => {
        e.persist();
        this.setState(() => ({ blog: e.target.value }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.blog) {
            this.setState(() => ({ error: 'Please provide a title and a bloggle.' }))
        } else if (!this.props.isAuthenticated) {
            this.setState(() => ({ error: 'Please sign in to bloggle.' }))
        } else {
            this.setState(() => ({ 
                title: '',
                blog: '',
                error: '',
                username: this.setUsername(),
                userImage: this.setUserImage()
             }));
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt.valueOf(),
                blog: this.state.blog,
                username: this.state.username,
                userImage: this.state.userImage
            })
            console.log('submitted');
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="text-button-flex">
                        <input 
                            type="text" 
                            placeholder="Title"
                            autoFocus
                            className="text-title"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                        <button className="button button-rounded" >Bloggle</button>
                    </div>
                    <textarea
                        placeholder="Start bloggle-ing"
                        value={this.state.blog}
                        className="textarea"
                        onChange={this.onBlogChange}
                    >
                    </textarea>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    uid: state.auth.uid
})


export default connect(mapStateToProps , undefined)(BloggleForm);