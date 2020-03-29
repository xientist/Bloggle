import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import database from '../firebase/firebase';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';

export class BloggleForm extends React.Component {

    setUser = () => {
        return this.props.users.find((user) => {
            if (user.id === this.props.uid) {
                return user.id;
            } else {
                return '';
            }
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            title: props.bloggle ? props.bloggle.title : '',
            blog: props.bloggle ? props.bloggle.blog : '',
            createdAt: props.bloggle ? moment(props.bloggle.createdAt) : moment(),
            error: '',
            emoji: false,
            username:  '',
            userImage: '',
            pictures: []
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

    addEmoji = (emoji, e) => {
        this.setState(() => ({ blog: this.state.blog + emoji.native }))
    }

    emojiToggle = () => {
        this.setState(() => ({ emoji: !this.state.emoji }));
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        });
    }

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
                username: '',
                userImage: ''
             }));
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt.valueOf(),
                blog: this.state.blog,
                username: this.setUser().username,
                userImage: this.setUser().userImage
            })
            console.log('submitted');
        }
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <div className="text-button-flex">
                            <input
                                id="title" 
                                type="text" 
                                placeholder="Title"
                                autoFocus
                                className="text-title"
                                value={this.state.title}
                                onChange={this.onTitleChange}
                                autoComplete="off"
                            />
                        </div>
                        <textarea
                            id="textarea"
                            placeholder="Start bloggle-ing"
                            value={this.state.blog}
                            className="textarea"
                            onChange={this.onBlogChange}
                            onKeyDown={this.handleReturnKey}
                        >
                        </textarea>
                        <div className="form-bar">
                            <div className="buttons-div">
                                <span className="emoji-button" onClick={this.emojiToggle}><img className="button-size" src="https://png.icons8.com/metro/1600/happy.png" /></span>
                                <button className="button button__form-button" >Bloggle</button>
                            </div>
                        </div>
                        <div className="picker-div">
                            {this.state.emoji && <Picker perLine={window.innerWidth <= 768 ? 7 : 19} onSelect={this.addEmoji} native={true} />}
                        </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state , props) => ({
    isAuthenticated: !!state.auth.uid,
    uid: state.auth.uid,
    users: state.users
})


export default connect(mapStateToProps , undefined)(BloggleForm);