import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../map/map';

class NewRoutes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="bld-header">
                        <div className="bld-2">
                            <div className="splash-logo bld-logo">
                                <Link to={"/"}>Struggle</Link>
                            </div>
                            <p className="bld-fake-link">
                                ROUTE BUILDER
                            </p>
                        </div>

                        <div className="bld-exit">
                            <Link to={"/routes"}>Exit Builder</Link>
                        </div>
                </header>
                <div>
                    <Map />
                </div>
            </div>
        )
    }

}

export default NewRoutes;