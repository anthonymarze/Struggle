import React from 'react';
import { Link } from 'react-router-dom';
import '../../app/assets/stylesheets/splash.css';

class Splash extends React.Component {

    constructor(props){
        super(props);
        this.demoUser = {
            email: 'user@demo.edu',
            password: 'password',
            first_name: 'Demo',
            last_name: 'User',
            birthday: new Date('1998-04-07'),
            gender: 'Female',
        }

        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    loginDemoUser() {
        this.props.login(this.demoUser).then(
            this.props.history.push("/dashboard")
        );
    }

    render() {
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
                            <button id="demo-btn" onClick={this.loginDemoUser} >DEMO</button>
                            <Link to="/signup">Use my email</Link>
                        </div>
                    </div>
                </div>
                <footer className="splash-footer">
                    <div className="route-logo container" id="g-r-l">
                        <div className="splash-logo" id="logo-w">
                            <Link to={"/"}>Struggle</Link>
                            <p>©2000</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Splash;