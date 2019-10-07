import React from 'react';
import { Link } from 'react-router-dom';

class CreateProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            first_name: '',
            last_name: '',
            birthday: '',
            gender: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount() {
        this.props.removeSessionErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(
            () => {
            this.props.history.push("/dashboard")
        });
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
            return "ob-errors"
        }
    }

    render() {

        return (
            <div className="onboarding-form-root session-form-root opc">
                <header className="nav-header">
                    <div className="nav-header-content container">
                        <div className="splash-logo">
                            <Link to={"/"}>Struggle</Link>
                        </div>
                        <div className="splash-login-container">
                            ghg
                        </div>
                    </div>
                </header>
                <div className="onboarding-form-body">
                        <div className="onboarding-form-text">
                            <h2>Create your profile</h2>
                            <p>This will give you a place to store workouts and struggle routes.</p>
                        </div>
                        <form
                            onSubmit={this.handleSubmit}>
                            <div className="onboarding-form">
                                <div className="ob-form-col-1 ">
                                <label id={this.renderErrors('First')}>First Name</label>
                                    <input
                                        onChange={this.update('first_name')}
                                        id={this.renderErrors('First')}
                                        type="text"
                                        value={this.state.first_name}>
                                    </input>
                                    
                                    <div className="session-form-spacing"></div>
                                    
                                <label id={this.renderErrors('Birthday')}>Birthday</label>
                                    <input
                                        onChange={this.update('birthday')}
                                        id={this.renderErrors('Birthday')}
                                        type="date"
                                        value={this.state.birthday}>
                                    </input>

                                    <div className="session-form-spacing"></div>
                                </div>

                                <div className="ob-form-col-2">
                                <label id={this.renderErrors('Last')}>Last Name</label>
                                    <input
                                        onChange={this.update('last_name')}
                                        id={this.renderErrors('Last')}
                                        type="text"
                                        value={this.state.last_name}>
                                    </input>

                                    <div className="session-form-spacing"></div>

                                    <label>Gender</label>
                                    <select name="gender"
                                        onChange={this.update('gender')}
                                        type="text"
                                        value={this.state.gender}>
                                        <option value="" disabled selected></option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <div className="session-form-spacing"></div>
                                </div>
                            </div>    
                                <div className="continue-flex-box">
                                    <input
                                    id="session-form-submit"
                                    className="continue"
                                    type="submit"
                                    value="continue">
                                    </input>
                                </div>
                        </form>
                        
                </div>
            </div>
        )
    }
}

export default CreateProfileForm;