import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.showSteps = this.showSteps.bind(this);
    }

    componentDidMount() {
        const map = ReactDOM.findDOMNode(this.refs.map)
        const options = {
            center: { lat: 44.3064688, lng: -76.0005896 },
            zoom: 17
        };
        let markerArray = [];
        let directionsService = new google.maps.DirectionsService();
        this.map = new google.maps.Map(map, options);
        let directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });
        
        this.calculateAndDisplayRoute(
            directionsRenderer, directionsService, markerArray, this.map);
        
        this.listenForMove();
        directionsService.route({

        });
    }

    calculateAndDisplayRoute(directionsRenderer, directionsService, markerArray, map) {
        for (var i = 0; i < markerArray.length; i++) {
            markerArray[i].setMap(null);
        }

        directionsService.route({
            origin: { lat: 44.30961331926814, lng: -75.99316013689946 },
            destination: { lat: 44.30270334916442, lng: -76.00879205103826 },
            travelMode: 'WALKING',
        }, (response, status) => {
            if (status === 'OK') {
                document.getElementById('warnings-panel').innerHTML =
                    '<b>' + response.routes[0].warnings + '<b>';
                directionsRenderer.setDirections(response);
                this.showSteps(response, markerArray, map);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    showSteps(directionsResult, markerArray, map) {
        let myRoute = directionsResult.routes[0].legs[0];
        for (var i = 0; i < myRoute.steps.length; i++) {
            let marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
            marker.setMap(map);
            marker.setPosition(myRoute.steps[i].start_location);
        }
    }
    
    listenForMove() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const bounds = this.map.getBounds();

            console.log('center',
                bounds.getCenter().lat(),
                bounds.getCenter().lng());
            console.log("north east",
                bounds.getNorthEast().lat(),
                bounds.getNorthEast().lng());
            console.log("south west",
                bounds.getSouthWest().lat(),
                bounds.getSouthWest().lng());
        });
    }

    render() {
        return (
            <div>
                <div id="warnings-panel"></div> 
                <div id="map" ref="map" />
            </div>
        );
    }
}

export default Map;