import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.addWaypoint = this.addWaypoint.bind(this);
        this.clearWaypoints = this.clearWaypoints.bind(this);
        this.listenForClick = this.listenForClick.bind(this);
        this.listenForDirectionsChange = this.listenForDirectionsChange.bind(this);
        this.waypts = [];
        this.addStart = this.addStart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.createCoordinateString = this.createCoordinateString.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            name: "",
            coordinate_string: "",
            author_id: this.props.props.state.session.id,
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
        if (this.waypts.length > 0){
            new google.maps.Marker({
                location: this.waypts[0].location
            })
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
                        // console.log(start);
                        start = start.slice(1, start.length - 1);
                        // console.log(start);

                        let end = step.end_location.toString();
                        // console.log(end);
                        end = end.slice(1, end.length - 1);
                        // console.log(end);

                        let comb = start.concat("|", end);

                        expStr = expStr.concat("|", comb);
                        expStr = expStr.replace(/\s+/g, '');
                    });

                    // console.log(expStr);
                    this.exportString = (expStr.slice(1));
                    directionsRenderer.setDirections(response);
                } 
            });
        }
        
    }

    computeTotalDistance(result) {
        // this.exportString = this.origin.toString();

        // for(let i = 0; i < this.waypts.length; i++) {
        //     this.exportString = this.exportString.concat(this.waypts[i].location.toString())
        // }

        // this.exportString.concat(this.destination);

        let total = 0;
        let myroute = result.routes[0];
        for (let i = 0; i < myroute.legs.length; i++) {
          total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
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
                        <button onClick={this.clearWaypoints}>Clear</button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="txt"
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