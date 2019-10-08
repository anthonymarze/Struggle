import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.setMapOnAll = this.setMapOnAll.bind(this);
        this.showMarkers = this.showMarkers.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.deleteMarkers = this.deleteMarkers.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.listenForClick = this.listenForClick.bind(this);
        this.markers = [];
        this.waypts = [];
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
        
        this.calculateAndDisplayRoute(
            this.directionsRenderer, this.directionsService);
        
        this.listenForMove();
        this.listenForClick();
        this.listenForDirectionsChange();
        this.labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.labelIndex = 0;
    }
    
    addMarker(location, map) {
        let marker = new google.maps.Marker({
            position: location,
            label: this.labels[this.labelIndex++ % this.labels.length],
            map: map,
        })
        this.markers.push(marker)
        this.waypts.push({
            location: marker.getPosition(),
            stopover: false
        });
    }

    setMapOnAll(map) {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }

    clearMarkers() {
        this.setMapOnAll(null);
    }

    showMarkers() {
        this.setMapOnAll(this.map);
    }
    
    deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
        this.waypts = [];
        debugger
        this.calculateAndDisplayRoute(this.directionsRenderer, this.directionsService)
        debugger
    }

    calculateAndDisplayRoute(directionsRenderer, directionsService) {
        directionsService.route({
            origin: { lat: 40.751370, lng: - 73.983982 },
            destination: { lat: 40.732490, lng: - 73.991023 },
            waypoints: this.waypts,
            travelMode: 'WALKING',
        }, (response, status) => {
            if (status === 'OK') {
                document.getElementById('warnings-panel').innerHTML =
                    '<b>' + response.routes[0].warnings + '<b>';
                directionsRenderer.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    computeTotalDistance(result) {
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
            this.addMarker(event.latLng, this.map);
            this.calculateAndDisplayRoute(this.directionsRenderer, this.directionsService);
        })
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

    listenForDirectionsChange() {
        this.directionsRenderer.addListener('directions_changed', () => {
            this.computeTotalDistance(this.directionsRenderer.getDirections());
        });
    }

    render() {
        return (
            <div id="map-display-container">
                <div id="top-panel">
                    <div className="map-inputs">
                        <button onClick={this.clearMarkers}>Hide Markers</button>
                        <button onClick={this.showMarkers}>Show All Markers</button>
                        <button onClick={this.deleteMarkers}>Delete Markers</button>
                    </div>
                    <input id="save-btn" type="submit" value="save"></input>
                </div>
                <div id="warnings-panel"></div> 
                <div id="bottom-panel">
                    <p>Total Distance: <span id="total"></span></p>
                </div>
                <div id="map" ref="map" />
                
            </div>
        );
    }
}

export default Map;