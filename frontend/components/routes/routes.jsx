import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Routes extends React.Component {

    constructor(props){
        super(props);
        this.id = this.props.state.session.id;
        this.routes = this.props.state.users[this.id].routes;
        this.createNewRoutes = this.createNewRoutes.bind(this);
    }

    createNewRoutes() {
        this.props.history.push("/routes/new");
    }

    render() {
        return (
            <div>
                <header className="nav-header">
                    <div className="nav-header-content container dash-nav-head">
                        <div>
                            <div className="splash-logo">
                                <Link to={"/"}>Struggle</Link>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div className="routes-fake-link">
                                Routes
                            </div>
                        </div>

                        <nav>
                            <button className="logout-btn rt-btn" onClick={this.props.logout}>Log Out</button>
                        </nav>
                    </div>
                </header>
                <div className="route-sub-header container">
                    <div className="rsh-1">
                        <h2 className="rt-h2">My Routes</h2>
                        <button className="logout-btn" onClick={this.createNewRoutes}>Create New Routes</button>
                    </div>
                    <div className="rsh-2">
                        <p>Learn more about sharing & exporting routes to a variety of devices</p>
                        <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/routes/route-list-mobile-upsell-c1aec554d010e3c86411ad560615802162318875f086d1e3ed4850d6c7014b8f.png" />
                    </div>
                </div>
                <div className="route-body container">
                    <div className="type-select">
                        <form className="type-select-form">
                            <button className="run-btn">Cycling</button>
                            <button className="run-btn">Running</button>
                        </form>
                    </div>
                    <div className="static-map-container">
                        <img src={"https://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=roadmap&path=color:0xff0000ff|weight:5|" + this.routes[0].coordinate_string + "&key=" + window.googleAPIKey} />
                    </div>
                </div>
                <div className="grey-b">
                    <div className="route-footer container">
                        <div className="route-footer-activities">
                            <h3>Your Recent Activities</h3>
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Routes);