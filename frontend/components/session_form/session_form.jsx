import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
            gender: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        // this.renderLoginError = this.renderLoginError.bind(this);
    }

    // componentDidMount() {
    //     this.setState(this.state.errors, () => this.props.errors = []) 
    // }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.formType === 'signup'){
            this.props.history.push({pathname: "/signup/onboarding", state: {email: this.state.email, password: this.state.password}})
            // <Redirect to="/signup/onboarding" />
        } else {
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        }
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors(inputType) {
        const errorsObject = {};
        this.props.errors.forEach(error => {
            const key = error.split(' ')[0];
            if (!errorsObject[key]) {
                errorsObject[key] = [error]
            } else {
                errorsObject[key].push(error);
            }
        })
        if (errorsObject[inputType]) {
            return errorsObject[inputType][0]
        }
    }

    isLoginError() {
        if (this.props.formType === 'login' && this.props.errors[0] === "The username or password did not match. Please try again.") {
            return "login-error"
        } else {
            return ""
        }
    }

    render() {
        let sessionFormText = '';
        if (this.props.formType === 'signup') {
            sessionFormText = 'sign up with your email address'
        } else if (this.props.formType === 'login') {
            sessionFormText = 'log in with email'
        }
        
        let otherLink = "/" + this.props.oppFormType;
        let isSignup = "";

        if (otherLink === '/signup') {
            isSignup = "session-form-submit"
        }

        return(
            
            <div className="session-form-root">
                <header className="nav-header">
                    <div className="nav-header-content container">
                        <div className="splash-logo">
                            <Link to={"/"}>Struggle</Link>
                        </div>
                        <nav className="splash-login-container" id={isSignup}>
                            <Link to={otherLink}>{this.props.oppFormType}</Link>
                        </nav>
                    </div>
                </header>
                <div className="session-form-body">
                    <div className="session-form-container">
                        <h1 className="please-join h1">The <strong className="special-struggle h1">Stuggle</strong> is real. Join today for free.</h1>
                        
                        <div className={this.isLoginError()}>{this.renderErrors('The')}</div>
                        
                        <form
                            className="session-form"
                            onSubmit={this.handleSubmit}>
                            
                            <div className="session-form-text">{sessionFormText}</div>
                            
                            <input
                                onChange={this.update('email')}
                                type="text"
                                value={this.state.email}
                                placeholder="Your Email">
                            </input>

                            <p className="errors">{this.renderErrors('Email')}</p>
                            <div className="session-form-spacing"></div>

                            <input
                                onChange={this.update('password')}
                                type="password"
                                value={this.state.password}
                                placeholder="Password">
                            </input>

                            <p className="errors">{this.renderErrors('Password')}</p>
                            <div className="session-form-spacing"></div>

                            <input
                                id="session-form-submit"
                                type="submit"
                                value={this.props.formType}>
                            </input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;