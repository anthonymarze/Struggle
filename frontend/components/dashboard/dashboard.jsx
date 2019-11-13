import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Feed from '../feed/feed';
// import ActivitiesIndex from '../activities/activities_index';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        }
        this.props.fetchUserActivities(this.props.session.id);
        this.props.fetchUserRoutes(this.props.session.id);
    }

    componentDidMount() {
        this.props.fetchUserRoutes(this.props.session.id).then(
            () => this.setState({
                mounted: true
            })
        )
    }

    render() {
        if (this.state.mounted === false) {
            return null
        }
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
                            <div className="routes-fake-link">
                                <Link to={"/routes"}>Routes</Link>
                            </div>
                            <div className="routes-fake-link">
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
                        <Feed {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;