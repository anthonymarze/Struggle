import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StaticMap from '../static_map/static_maps';

class RoutesIndex extends React.Component {

    constructor(props){
        super(props);
        this.id = this.props.session.id;
        this.createNewRoutes = this.createNewRoutes.bind(this);
        this.routeNames = [];
        this.state = {
            mounted: false,
            containerHeight: (Math.floor(this.props.routes.length / 4) * 386) + 500
        }
    }

    componentDidMount() {
        this.props.fetchUserRoutes(this.props.session.id).then(
            () => this.setState({mounted: true,
                containerHeight: (Math.floor(this.props.routes.length / 4) * 386) + 500
            })
        )
    }

    createNewRoutes() {
        this.props.history.push("/routes/new");
    }

    showRouteNames() {
        this.props.routes.forEach(route => {
            this.routeNames.push(<li key={route.id}>{route.name}</li>)
        })
        return this.routeNames;
    }

    render() {
        if(this.state.mounted === false){
            return null
        }
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
                                <p>Routes</p>
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
                <div className="route-sub-header container" id="no-pad">
                    <div className="rsh-1">
                        <h2 className="rt-h2">My Routes</h2>
                        <button className="logout-btn" onClick={this.createNewRoutes}>Create New Routes</button>
                    </div>
                    <div className="rsh-2">
                        <p>Learn more about <a href="https://www.youtube.com/watch?v=S02BHmWPZNs" target="_">sharing & exporting routes</a> to a variety of devices</p>
                        <img src="https://d3nn82uaxijpm6.cloudfront.net/assets/routes/route-list-mobile-upsell-c1aec554d010e3c86411ad560615802162318875f086d1e3ed4850d6c7014b8f.png" />
                    </div>
                </div>
                <div className="route-body container" id="no-pad" style={{ height: this.state.containerHeight }}>
                    <div className="type-select">
                        <form className="type-select-form">
                            <button className="cycle-btn">Cycling</button>
                            <button className="run-btn">Running</button>
                        </form>
                    </div>
                    <div className="static-map-container">
                        <StaticMap props={this.props}/>
                    </div>
                </div>
                <div className="grey-b">
                    <div className="route-footer container" id="no-pad">
                        <div className="route-footer-activities">
                            <h3>Your Recent Routes</h3>
                            <ul>
                                {this.showRouteNames()}
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

export default withRouter(RoutesIndex);