import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchRoute } from '../../actions/route_actions';

class StaticMapItems extends React.Component {
    // "https://maps.googleapis.com/maps/api/elevation/json?locations=" + this.props.props.coordinate_string + "&key=" + window.googleAPIKey
    constructor(props){
        super(props);
        this.showRoute = this.showRoute.bind(this);
    }

    showRoute() {
        this.props.history.push({ pathname: "/routes/show", state: {routeId: this.props.props.id }});
    }

    render() {
        return(
            <div id="metadata">
                <img src={"https://maps.googleapis.com/maps/api/staticmap?size=300x200&maptype=roadmap&path=color:0xff0000ff|weight:5|" + this.props.props.coordinate_string + "&key=" + window.googleAPIKey}
                    onClick={this.showRoute}
                />
                <div>
                    <strong className="route-name" onClick={this.showRoute}>{this.props.props.name}</strong>
                </div>
                <div className="d-a">
                    <div>
                        <strong className="route-data-out">{this.props.props.distance} km</strong>
                        <p className="route-data-tag">Distance</p>
                    </div>
                    <div>
                        <strong className="route-data-out">{this.props.props.elevation} m</strong>
                        <p className="route-data-tag">Elevation</p>
                    </div>  
                </div>
                <h5>Created on {this.props.props.created_at.slice(0, 10)}</h5>
            </div>
        )
    }
}

export default withRouter(StaticMapItems);