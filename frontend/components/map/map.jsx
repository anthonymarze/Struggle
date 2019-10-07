import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {

    constructor(props) {
        super(props);
    
    }

    componentDidMount() {
        const map = ReactDOM.findDOMNode(this.refs.map)
        const options = {
            center: this.props.center,
            zoom: 17
        };
        this.map = new google.maps.Map(map, options);
        this.listenForMove();
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
                <div id="map" ref="map" />
            </div>
        );
    }
}

export default Map;