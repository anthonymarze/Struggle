import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class ActivitiesIndex extends React.Component {

    constructor(props) {
        super(props);
        // this.id = this.props.session.id;
        this.createNewActivity = this.createNewActivity.bind(this);
        // this.routeNames = [];
        // this.state = {
        //     mounted: false
        // }
    }

    componentDidMount() {
        this.props.fetchUserActivities(this.props.session.id)
    }

    createNewActivity() {
        this.props.history.push("/activities/new");
    }

    render() {
        let i = 1;
        let cName = ""
        const activities = this.props.activities.map(activity => {
            if(i % 2 === 0){
                cName = "table-row-dark"
                i++
            } else if (i % 2 === 1) {
                cName = "table-row-light"
                i++
            }
            return(
                <tr key={activity.id} className={cName}>
                    <td>{activity.sport}</td>
                    <td>{activity.date}</td>
                    <td>{activity.title}</td>
                    <td>{activity.time}</td>
                    <td>{activity.distance}</td>
                    <td>{activity.elevation}</td>
                </tr>
            )
        })
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
                                <p>Activities</p>
                            </div>
                        </div>
                        <div className="btn-div">
                            <button className="logout-btn rt-btn" onClick={this.props.logout}>Log Out</button>
                            <button className="logout-btn rt-btn no-2" onClick={this.createNewActivity}>Make new activity</button>
                        </div>
                    </div>
                </header>
                <div className="route-sub-header container" id="no-pad">
                    <h1 className="activities-form-h1">My Activities</h1>
                </div>
                <div className="route-body container" id="no-pad">
                    <h3 className="activities-h3">{Object.values(this.props.activities).length} Activities</h3>
                    <table className="table-main">
                        <thead>
                            <tr>
                                <th className="th-1-1">Sport</th>
                                <th className="th-1-2">Date</th>
                                <th>Title</th>
                                <th>Time</th>
                                <th>Distance</th>
                                <th>Elevation</th>
                            </tr>
                        </thead>
                        <tbody>
                           {activities} 
                        </tbody>
                    </table>
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

export default ActivitiesIndex;