import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.addWaypoint = this.addWaypoint.bind(this);
        this.clearWaypoints = this.clearWaypoints.bind(this);
        this.waypts = [];
        this.start = null;
        this.addStart = this.addStart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            name: "",
            coordinate_string: "",
            author_id: this.props.props.state.session.id,
            distance: 0,
            elevation: 0,
            transportation_style: "WALKING",
        }
        this.exportString = "";
    }

    componentDidMount() {
        const map = ReactDOM.findDOMNode(this.refs.map)
        const options = {
            center: { lat: 40.751370, lng: - 73.983982 },
            zoom: 17
        };
        this.directionsService = new google.maps.DirectionsService();
        this.map = new google.maps.Map(map, options);
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map
        });
        
        this.listenForClick();
        this.listenForDirectionsChange();
    }
    
    addWaypoint(location) {

        this.waypts.push({
            location: location,
            stopover: false,
        })
    }

    addStart() {
        if (this.waypts.length === 1){
            this.start = new google.maps.Marker({
                position: this.waypts[0].location,
                map: this.map,
                title: "start",
            });
            this.start.setMap(this.map);
        } else {
            this.start.setMap(null);
        }
    }

    clearWaypoints() {
        this.waypts = [];
        this.directionsRenderer.setMap(null);
        this.calculateAndDisplayRoute(this.directionsRenderer, this.directionsService);
    }

    calculateAndDisplayRoute(directionsRenderer, directionsService) {
        if (this.waypts.length > 1 ) {
            let trueWaypts = this.waypts.slice(this.waypts[1], this.waypts.length);

            directionsService.route({
                origin: this.waypts[0].location,
                destination: this.waypts[this.waypts.length - 1].location,
                waypoints: trueWaypts,
                travelMode: 'WALKING',
            }, (response, status) => {
                if (status === 'OK') {
                    
                    let expStr = "";
                    
                    response.routes[0].legs[0].steps.forEach(step => {
                        let start = step.start_location.toString();
                        start = start.slice(1, start.length - 1);

                        let end = step.end_location.toString();
                        end = end.slice(1, end.length - 1);

                        let comb = start.concat("|", end);

                        expStr = expStr.concat("|", comb);
                        expStr = expStr.replace(/\s+/g, '');
                    });

                    this.exportString = (expStr.slice(1));
                    directionsRenderer.setDirections(response);
                } 
            });
        }
        
    }

    computeTotalDistance(result) {

        let total = 0;
        let myroute = result.routes[0];
        for (let i = 0; i < myroute.legs.length; i++) {
          total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        this.state.distance = total;

        document.getElementById('total').innerHTML = total + ' km';
    }

    listenForClick() {
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.addWaypoint(event.latLng, this.map);
            this.addStart();
            this.calculateAndDisplayRoute(this.directionsRenderer, this.directionsService);
        })
    }

    listenForDirectionsChange() {
        this.directionsRenderer.addListener('directions_changed', () => {
            this.computeTotalDistance(this.directionsRenderer.getDirections());
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.coordinate_string = this.exportString;
        const route = Object.assign({}, this.state)
        this.props.props.createRoute(route).then(
            () => this.props.props.history.push("/routes")
        )
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div id="map-display-container">
                <div id="top-panel">
                    <div className="map-inputs">
                        <button className="clear-btn" onClick={this.clearWaypoints}>Clear Route</button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label className="route-txt">Route Name:</label>
                        <input className="map-txt"
                            onChange={this.update('name')}
                            type="text"
                            value={this.state.name}
                            placeholder="Route Name">
                        </input>

                        <input
                            id="save-btn"
                            type="submit"
                            value="save">    
                        </input>
                    </form>
                </div>
                <div id="bottom-panel">
                    <p>Total Distance: <span id="total"></span></p>
                </div>
                <div id="map" ref="map" />
                
            </div>
        );
    }
}

export default Map;