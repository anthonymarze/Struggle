import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let sessionFormText = '';
        if (this.props.formType === 'signup') {
            sessionFormText = 'sign up with your email address'
        } else if (this.props.formType === 'login') {
            sessionFormText = 'log in with email'
        }

        return(
            <div className="session-form-root">
                <header className="nav-header">
                    <div className="nav-header-content container">
                        <div className="splash-logo">
                            <strong>Struggle</strong>
                        </div>
                        <nav className="splash-login-container">
                            <Link to="/signup">Sign Up</Link>
                        </nav>
                    </div>
                </header>
                <div className="session-form-body">
                    <div className="session-form-container">
                        <h1 className="please-join h1">Join Stuggle today, it's free.</h1>
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

                            <p className="errors">{this.props.errors}</p>
                            <div className="session-form-spacing"></div>

                            <input
                                onChange={this.update('password')}
                                type="password"
                                value={this.state.password}
                                placeholder="Password">
                            </input>

                            <p className="errors">{this.props.errors}</p>
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