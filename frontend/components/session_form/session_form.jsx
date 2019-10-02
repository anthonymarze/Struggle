import React from 'react';

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

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input onChange={this.update('email')} type="text" value={this.state.email}></input>
                    </label>

                    <label>Password
                        <input onChange={this.update('password')} type="password" value={this.state.password}></input>
                    </label>

                    <label>First Name
                        <input onChange={this.update('first_name')} type="text" value={this.state.first_name}></input>
                    </label>

                    <label>Last Name
                        <input onChange={this.update('last_name')} type="text" value={this.state.last_name}></input>
                    </label>

                    <label>bithday
                        <input onChange={this.update('birthday')} type="date" value={this.state.birthday}></input>
                    </label>

                    <input type="submit" value={this.props.formType}></input>
                </form>
            </div>
        )
    }
}

export default SessionForm;