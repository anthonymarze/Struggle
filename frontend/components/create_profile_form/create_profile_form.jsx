import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            birthday: '',
            gender: '',
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
        return (
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

        return (
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

                            <label>First Name
                                <input
                                    onChange={this.update('first_name')}
                                    type="text"
                                    value={this.state.first_name}>
                                </input>
                            </label>

                            <p className="errors">{this.props.errors}</p>
                            <div className="session-form-spacing"></div>
                            
                            <label>Last Name
                                <input
                                    onChange={this.update('last_name')}
                                    type="text"
                                    value={this.state.last_name}>
                                </input>
                            </label>

                            <p className="errors">{this.props.errors}</p>
                            <div className="session-form-spacing"></div>

                            <label>Birthday
                                <input
                                    onChange={this.update('birthday')}
                                    type="date"
                                    value={this.state.birthday}>
                                </input>
                            </label>

                            <p className="errors">{this.props.errors}</p>
                            <div className="session-form-spacing"></div>

                            <label>Gender
                                <input
                                    onChange={this.update('gender')}
                                    type="dropdown"
                                    value={this.state.gender}>
                                </input>
                            </label>

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

export default CreateProfileForm;
<label>First Name
                                <input onChange={this.update('first_name')} type="text" value={this.state.first_name}></input>
</label>

    <label>Last Name
                                <input onChange={this.update('last_name')} type="text" value={this.state.last_name}></input>
    </label>

    <label>bithday
                                <input onChange={this.update('birthday')} type="date" value={this.state.birthday}></input>
    </label>