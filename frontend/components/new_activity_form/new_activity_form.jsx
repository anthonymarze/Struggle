import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class NewActivityForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            distance: null,
            duration: null,
            elevation: null,
            sport: "Run",
            date_and_time: null,
            title: "My Run",
            description: "",
            exertion: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createActivity(this.state).then(
            () => this.props.history.push({ pathname: "/activities" })
        )
        
        // .fail((response) => {
        //     this.props.receiveSessionErrors(response.responseJSON)
        // );
    }

    render() {
        return (
            <div>
                <header className="nav-header">
                    <div className="nav-header-content container dash-nav-head" id="no-pad">
                        <div>
                            <div className="splash-logo">
                                <Link to={"/"}>Struggle</Link>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div className="routes-fake-link">
                                <Link to={"/routes"}>Routes</Link>
                            </div>
                            <div className="routes-fake-link">
                                <Link to={"/activities"}>Activities</Link>
                            </div>
                        </div>

                        <nav>
                            <button className="logout-btn rt-btn" onClick={this.props.logout}>Log Out</button>
                        </nav>
                    </div>
                </header>
                <div className="activities-form-main container">
                    <h1 className="activities-form-h1">New Activity</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <fieldset className="activities-form-fieldsets">
                                <label>Distance</label>
                                <br/>
                                <input
                                    onChange={this.update('distance')}
                                    type="text"
                                    value={this.state.distance}>
                                </input>
                            </fieldset>

                            <fieldset className="activities-form-fieldsets">
                                <label>Duration</label>
                                <br/>
                                <input
                                    onChange={this.update('duration')}
                                    type="text"
                                    value={this.state.duration}>
                                </input>
                            </fieldset>

                            <fieldset className="activities-form-fieldsets">
                                <label>Elevation</label>
                                <br/>
                                <input
                                    onChange={this.update('elevation')}
                                    type="text"
                                    value={this.state.elevation}>
                                </input>
                            </fieldset>
                        </div>
                        <hr className="activities-form-hr"/>
                        <div>
                            <fieldset className="activities-form-fieldsets">
                                <label>Sport</label>
                                <br/>
                                <input
                                    onChange={this.update('sport')}
                                    type="text"
                                    value={this.state.sport}>
                                </input>
                            </fieldset>

                            <fieldset className="activities-form-fieldsets">
                                <label>Date & Time</label>
                                <br/>
                                <input
                                    onChange={this.update('date_and_time')}
                                    type="text"
                                    value={this.state.date_and_time}>
                                </input>
                            </fieldset>
                        </div>
                        <div>
                            <fieldset className="activities-form-fieldsets title-top">
                                <label>Title</label>
                                <br/>
                                <input
                                    id="title-input"
                                    onChange={this.update('title')}
                                    type="text"
                                    value={this.state.title}>
                                </input>
                            </fieldset>
                        </div>
                        <hr className="activities-form-hr" />
                        <div>
                            <fieldset className="activities-form-fieldsets">
                                <label>Description</label>
                                <br/>
                                <textarea
                                    onChange={this.update('description')}
                                    value={this.state.description}
                                    placeholder="How did it go? Were you tired or rested? How was the weather?"></textarea>
                            </fieldset>

                            <fieldset className="activities-form-fieldsets">
                                <label>Perceived Exertion</label>
                                <br/>
                                <input
                                    onChange={this.update('perceived_exertion')}
                                    type="text"
                                    value={this.state.perceived_exertion}>
                                </input>
                            </fieldset>
                        </div>
                        <hr className="activities-form-hr" />
                        <input
                            className="logout-btn rt-btn"
                            type="submit"
                            value="Create">
                        </input>
                    </form>
                </div>
                <div className="grey-b">
                    <div className="route-footer container" id="no-pad">
                        <div className="route-footer-activities">
                            <h3>Your Recent Activities</h3>
                            <ul>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="route-logo container">
                        <div className="splash-logo" id="logo">
                            <Link to={"/"}>Struggle</Link>
                            <p>©2000</p>
                        </div>
                        <div>
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewActivityForm