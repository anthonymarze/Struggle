import React from 'react';
import { Link } from 'react-router-dom';
import '../../app/assets/stylesheets/splash.css';

const Splash = ({currentUser, logout}) => {
    return (
        <div>
            <header className="nav-header">
                <div className="nav-header-content splash-container">
                    <div className="splash-logo">
                        <strong>Struggle</strong>
                    </div>
                    <nav className="splash-login-container">
                        <Link to="/login">Log In</Link>
                    </nav>
                </div>
            </header>
            <div className="splash-body splash-container">
                <h2 className="splash-body-title">The #2 app for runners and cylclists</h2>
                <div className="splash-body-main-content">
                    <div>
                        <img className="splash-body-image" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg"></img>
                    </div>
                    <div className="splash-body-signup-form">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
            <footer className="splash-footer">

            </footer>
        </div>
    )
};

export default Splash;