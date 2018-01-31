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
        <div className="content-container">
            <p className="centered-landing-font">Bloggle is crafted with</p>
            <hr className="header-line" />
            <div className="code-logo-container">
                <div className="code-logo-div"><img className="code-logo" src="https://cdn.worldvectorlogo.com/logos/react.svg"/></div>
                <div className="code-logo-div"><img className="code-logo" src="http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png"/></div>
                <div className="code-logo-div"><img className="code-logo" src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"/></div>
                <div className="code-logo-div"><img className="code-logo" src="https://firebase.google.com/_static/images/firebase/touchicon-180.png"/></div>
                <div className="code-logo-div"><img className="code-logo-babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png"/></div>
            </div>
            <div className="landing-divider">
                <hr />
            </div>
            <div className="landing-block-container">
                <div className="landing-block-image"><img className="block-image" src="https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg" /></div>
                <div className="landing-block-info">
                    <h2 className="block-info-header">Share your life with a bloggle.</h2>
                    <p className="block-info-paragaph">Through Bloggle, you can type out whatever life throws at you and share with thousands of online strangers who are most likely more than relucatant to even care about your life. This website features an edit function incase your bloggle is too embarassing, and you can also set up your username and profile picture. Once every blue moon, a stranger may have something in common with you and may even like your bloggle! Of course, that like can be retracted with a reclick of the 'like' button.</p>
                </div>
            </div>
            <div className="landing-block-container">
                <div className="landing-block-info__2">
                    <h2 className="block-info-header">There's much more than meets the eye.</h2>
                    <p className="block-info-paragaph">Pick from a hundred emojis through our emoticon selector. Let the world know that you're happy, sad, angry, or disgusted through our many beautiful emoticons. Words alone do not justify the way how we feel, make sure all those internet strangers really REALLY know how strongly you feel about your life with those yellow-faced emojis (note: they also come in different colors too! No discrimination!).</p>
                </div>
                <div className="landing-block-image"><img className="block-image" src="https://78.media.tumblr.com/a744c40c7139f078c0d265b34ba05e31/tumblr_inline_n1nm9tNadA1s4rar7.png" /></div>

            </div>
            <div className="landing-divider">
                <hr />
            </div>
            
            <p className="why-header">Bloggle features</p>
            <hr className="header-line" />
         
            <div className="card-logo-container">
                    <div><img className="card-logo__img" src="https://image.spreadshirtmedia.com/image-server/v1/designs/1358935,width=178,height=178/square-speech-bubble-with-rounded-corners.png" /></div>
                    <div><img className="card-logo__img" src="https://www.materialui.co/materialIcons/action/settings_grey_192x192.png" /></div>
                    <div><img className="card-logo__img" src="http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png" /></div>
            </div>
            <div className="card-logo-container">
                <div className="card-info-header">
                    <div><h3></h3></div>
                    <div><h3></h3></div>
                    <div><h3></h3></div>
                </div>
            </div>
            <div className="card-logo-container">
                <div className="card-info-paragraph">

                </div>
            </div>
        </div>

        
    </div>
)

export default LandingPage;