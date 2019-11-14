import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewActivityForm extends React.Component {
    constructor(props) {
        super(props)
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.monthStr = `${this.month}`;
        // this.updateDate = this.updateDate.bind(this);
        // this.updateTime = this.updateTime.bind(this);
        // this.updateHour = this.updateHour.bind(this);
        // this.updateMin = this.updateMin.bind(this);
        // this.updateSec = this.updateSec.bind(this);

        if(this.month < 10){
            this.monthStr = "0" + this.monthStr;
        }
        this.day = this.date.getDate();
        this.dayStr = `${this.day}`;
        if (this.day < 10) {
            this.dayStr = "0" + this.dayStr;
        }
        this.dateStr = `${this.year}-${this.monthStr}-${this.dayStr}`

        this.hours = this.date.getHours();
        this.hoursStr = `${this.hours}`;
        if (this.hours % 12 === 0) {
            this.hoursStr = "12";
        } else {
            this.hoursStr = `${this.hours % 12}`;
        }

        this.minutes = this.date.getMinutes() + 1;
        this.minutesStr = `${this.minutes}`;
        if (this.minutes < 10) {
            this.minutesStr = "0" + this.minutesStr;
        }

        this.timeOfDay = "";
        if (this.hours < 12) {
            this.timeOfDay = "AM";
        } else if (this.hours >= 12) {
            this.timeOfDay = "PM";
        }

        this.timeStr = `${this.hoursStr}:${this.minutesStr} ${this.timeOfDay}`;

        this.dHour = "01";
        this.dMin = "00";
        this.dSec = "00";

        this.state = {
            distance: null,
            duration: `${this.dHour}:${this.dMin}:${this.dSec}`,
            elevation: null,
            sport: "Run",
            date_and_time: this.dateStr + "T" + this.timeStr,
            title: "My Run",
            description: "",
            exertion: null,
            dateStr: this.dateStr,
            timeStr: this.timeStr,
            dHour: this.dHour,
            dMin: this.dMin,
            dSec: this.dSec
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    // updateDate(e) {
    //     e.preventDefault();
    //     this.dateStr = e.currentTarget.value;
    //     this.setState({
    //         dateStr: this.dateStr
    //     })
    // }

    // updateTime(e) {
    //     e.preventDefault();
    //     this.timeStr = e.currentTarget.value;
    //     this.setState({
    //         timeStr: this.timeStr
    //     })
    // }

    // updateHour(e) {
    //     e.preventDefault();
    //     this.dHour = e.currentTarget.value;
    //     this.setState({
    //         duration: this.dHour + this.state.duration.slice(2)
    //     })
    // }

    // updateMin(e) {
    //     e.preventDefault();
    //     this.dMin = e.currentTarget.value;
    //     this.setState({
    //         duration: this.state.duration.slice(0, 3) + this.dMin + this.state.duration.slice(5)
    //     })
    // }

    // updateSec(e) {
    //     debugger
    //     e.preventDefault();
    //     this.dSec = e.currentTarget.value;
    //     this.setState({
    //         duration: this.state.duration.slice(0, 6) + this.dSec
    //     })
    // }

    // updateDate() {
    //     return (e) => {
    //         this.date = e.currentTarget.value;
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        const dHour = this.state.dHour;
        const dMin = this.state.dMin;
        const dSec = this.state.dSec;
        const dateStr = this.state.dateStr;
        const timeStr = this.state.timeStr;
        this.setState({
            ["duration"]: `${dHour}:${dMin}:${dSec}`,
            ["date_and_time"]: dateStr + "T" + timeStr
        })
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
                            <div className="routes-fake-link">
                                <Link to={"/dashboard"}>Dashboard</Link>
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
                                    id="sub-duration-front"
                                    onChange={this.update('distance')}
                                    type="text"
                                    value={this.state.distance}>
                                </input>
                                <input
                                    id="sub-duration-back"
                                    type="text"
                                    value="kilometers"
                                    readonly>
                                </input>
                            </fieldset>

                            <fieldset className="activities-form-fieldsets">
                                <label>Duration</label>
                                <br/>
                                <div className="placeholder" data-placeholder="hr">
                                    <input
                                        id="sub-duration"
                                        onChange={this.update("dHour")}
                                        type="text"
                                        value={this.state.dHour}>
                                    </input> 
                                </div>
                                
                                <div className="placeholder" data-placeholder="min">
                                    <input
                                        id="sub-duration-mid"
                                        onChange={this.update("dMin")}
                                        type="text"
                                        value={this.state.dMin}>
                                    </input>
                                </div>

                                <div className="placeholder" data-placeholder="s">
                                    <input
                                        id="sub-duration"
                                        onChange={this.update("dSec")}
                                        type="text"
                                        value={this.state.dSec}>
                                    </input>
                                </div>
                            </fieldset>

                            <fieldset className="activities-form-fieldsets">
                                <label>Elevation</label>
                                <br/>
                                <input
                                    id="sub-duration-front"
                                    onChange={this.update('elevation')}
                                    type="text"
                                    value={this.state.elevation}>
                                </input>
                                <input
                                    id="sub-duration-back"
                                    type="text"
                                    value="meters"
                                    readonly>
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
                                    id = "sub-duration-date"
                                    onChange={this.update('dateStr')}
                                    type="date"
                                    value={this.state.dateStr}>
                                </input>
                                <input
                                    id="sub-duration-time"
                                    onChange={this.update('timeStr')}
                                    type="text"
                                    value={this.state.timeStr}>
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