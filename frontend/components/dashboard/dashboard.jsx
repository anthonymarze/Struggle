import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Feed from '../feed/feed';
// import ActivitiesIndex from '../activities/activities_index';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <header className="nav-header">
                    <div className="nav-header-content container dash-nav-head">
                        <div>
                            <div className="splash-logo">
                                <Link to={"/"}>Struggle</Link>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <div className="routes-link">
                                <Link to={"/routes"}>Routes</Link>
                            </div>
                            <div className="routes-link">
                                <Link to={"/activities"}>Activities</Link>
                            </div>
                        </div>
                        
                        <nav>
                            <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
                        </nav>
                    </div>
                </header>
                <div className="dash-body">
                    <div className="feed-content">
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;