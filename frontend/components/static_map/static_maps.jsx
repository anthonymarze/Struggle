import React from 'react';
import StaticMapItems from './static_map_items';

class StaticMap extends React.Component {
    
    createStaticMapItems() {
        const staticMaps = [];

        for(let i = 0; i < this.props.props.routes.length; i++){
            staticMaps.push(<StaticMapItems key={this.props.props.routes[i].id.toString()} props={this.props.props.routes[i]}/>)
        }

        return staticMaps;
    }

    render() {
        
        return (
            <>
                {this.createStaticMapItems()}
            </>
        )
    }
}

export default StaticMap;