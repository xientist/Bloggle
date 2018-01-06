import React from 'react';
import Header from './Header';
import { firebase } from '../firebase/firebase';
import database from '../firebase/firebase';


class SettingsPage extends React.Component  {

    state = {
        username: ''
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        firebase.auth().onAuthStateChanged((user) => {
            let username = this.state.username;

            if (user) {
                database.ref(`users/usernames/${user.uid}`).set({
                    email: user.email,
                    uid: user.uid,
                    username: username
                });

                console.log(`User ${username} logged in!`)
            } else {
                console.log('No username added')
            }

            this.props.history.push('/');
        });
    }

    render() {
        return (
        <div>
            <Header />
            <form className="content-container username" onSubmit={this.onSubmit} >
                <h3>Set the username you want to display</h3>
                <input
                    type="text"
                    placeholder="user name"
                    autoFocus
                    className="text-username"
                    value={this.state.username}
                    onChange={this.onUsernameChange}
                />
                <button className="button button-rounded" >Submit</button>
            </form>
        </div>
        )
    }
}



export default SettingsPage;