import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const LandingPage = () => (
    <div>
        <header className="landing-header">
            <span className="b-logo">b</span>
            <h1>bloggle</h1>
            <p>The simple blogging site.</p>
            <Button raised><Link className="start-link" to="/dashboard">Start Bloggling</Link></Button>
        </header>
        <div className="content-container content-container--white">
            <p className="centered-landing-font">Bloggle is crafted with</p>
            <hr className="header-line" />
            <div className="code-logo-container">
                <div className="code-logo-div"><img className="code-logo" src="https://cdn.worldvectorlogo.com/logos/react.svg"/></div>
                <div className="code-logo-div"><img className="code-logo" src="http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png"/></div>
                <div className="code-logo-div"><img className="code-logo" src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"/></div>
                <div className="code-logo-div"><img className="code-logo" src="https://img.icons8.com/color/480/firebase.png"/></div>
                <div className="code-logo-div"><img className="code-logo-babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png"/></div>
            </div>
            <div className="landing-divider">
                <hr />
            </div>
            <div className="landing-block-container">
                <div className="landing-block-image"><img className="block-image" src="https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg" /></div>
                <div className="landing-block-info">
                    <h2 className="block-info-header">Share your life with a bloggle.</h2>
                    <p className="block-info-paragaph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida mauris consectetur urna sagittis, quis cursus libero varius. Maecenas et dolor sit amet tortor pretium eleifend. Praesent a luctus lacus, id efficitur arcu. Fusce elit tellus, accumsan et porttitor nec, suscipit in mauris. Cras feugiat at lorem sed dignissim. Sed ac fringilla eros. Proin sit amet nisi a orci lacinia euismod id in leo. Morbi ac facilisis augue.</p>
                </div>
            </div>
            <div className="landing-block-container">
                <div className="landing-block-info">
                    <h2 className="block-info-header">There's much more than meets the eye.</h2>
                    <p className="block-info-paragaph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida mauris consectetur urna sagittis, quis cursus libero varius. Maecenas et dolor sit amet tortor pretium eleifend. Praesent a luctus lacus, id efficitur arcu. Fusce elit tellus, accumsan et porttitor nec, suscipit in mauris. Cras feugiat at lorem sed dignissim. Sed ac fringilla eros. Proin sit amet nisi a orci lacinia euismod id in leo. Morbi ac facilisis augue.</p>
                </div>
                <div className="landing-block-image"><img className="block-image" src="https://78.media.tumblr.com/a744c40c7139f078c0d265b34ba05e31/tumblr_inline_n1nm9tNadA1s4rar7.png" /></div>
            </div>
            <div className="landing-divider">
                <hr />
            </div>
            <p className="why-header">Bloggle features</p>
            <hr className="header-line" />
         
            <div className="card-container">
                    <div>
                        <img className="card-logo__img" src="https://image.spreadshirtmedia.com/image-server/v1/designs/1358935,width=178,height=178/square-speech-bubble-with-rounded-corners.png" />
                        <h3>Post a comment.</h3>
                        <p className="card-p" >Create a title and post a comment with hundreds of cute emoticons to choose from!</p>
                    </div>
                    <div>
                        <img className="card-logo__img" src="https://www.materialui.co/materialIcons/action/settings_grey_192x192.png" />
                        <h3>Create a user profile.</h3>
                        <p className="card-p" >Set your name and profile picture in the settings to show your internet persona.</p>
                    </div>
                    <div>
                        <img className="card-logo__img" src="http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png" />
                        <h3>Navigate the site.</h3>
                        <p className="card-p" >Traverse through the bloggles using the pagination below the main page.</p>
                    </div>
            </div>
        </div>
        <div className="landing-bottom">
            <div className="content-container flex">
                <div className="bottom-info">
                    <span className="b-logo__bottom">b</span>
                    <h2>bloggle</h2>
                    <p>A social media webpage project by Thomas Huynh.</p>
                </div>
                <div className="bottom-link">
                    <a href="/">Github</a>
                    <a href="/">Twitter</a>
                    <a href="/">Youtube</a>
                    <a href="/">Facebook</a>
                </div>
            </div>
        </div>
    </div>
)

export default LandingPage;