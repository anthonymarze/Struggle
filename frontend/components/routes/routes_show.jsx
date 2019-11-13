import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import StaticMap from '../static_map/static_maps';

class RoutesShow extends React.Component {

    constructor(props) {
        super(props);
        this.route = this.props.fetchRoute(this.props.history.location.state.routeId);
        // this.id = this.props.session.id;
        // this.state = {
        //     mounted: false,
        //     containerHeight: (Math.floor(this.props.routes.length / 4) * 386) + 500
        // }
    }

    // componentDidMount() {
    
    // }
    // showRouteNames() {
    //     this.props.routes.forEach(route => {
    //         this.routeNames.push(<li key={route.id}>{route.name}</li>)
    //     })
    //     return this.routeNames;
    // }

    render() {
            // "https://maps.googleapis.com/maps/api/elevation/json?locations=" + this.props.props.coordinate_string + "&key=" + window.googleAPIKey
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
                <div>

                </div>
                <div className="grey-b">
                    <div className="route-footer container" id="no-pad">
                        <div className="route-footer-activities">
                            <h3>Your Recent Routes</h3>
                            <ul>
                                {`${this.route}`}
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

export default withRouter(RoutesShow);