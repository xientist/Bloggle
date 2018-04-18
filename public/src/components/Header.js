import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout , startLoginGoogle , startLoginFacebook } from '../actions/auth';

class Header extends React.Component {

    startStartLogout = () => {
        location.reload();
        this.props.startLogout();
    }

    startStatGoogleLogin = () => {
        
        this.props.startLoginGoogle().then(() => {
            location.reload();
        });
    
    }

    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard">
                            <h1>bloggle</h1>
                        </Link>
                        {this.props.isAuthenticated && <Link className="button button--link button--settings" to="/settings">Settings</Link>}
                        {this.props.isAuthenticated  ? <button className="button button--link" onClick={this.startStartLogout} >Logout</button> : <button className="button button--link" onClick={this.startStatGoogleLogin}>Log in</button>}
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout:  () => dispatch(startLogout()),
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Header);

