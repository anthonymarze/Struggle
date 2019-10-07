import React from 'react';
import { Link } from 'react-router-dom';

class NewRoutes extends React.Component {

    render() {
        return (
            <div>
                <header className="nav-header">
                    <div className="nav-header-content container dash-nav-head">
                        <div>
                            <div className="splash-logo">
                                <Link to={"/"}>Struggle</Link>
                            </div>
                            <div className="routes-fake-link">
                                ROUTE BUILDER
                            </div>
                        </div>

                        <div>
                            <Link to={"/routes"}>Exit Builder</Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}

export default NewRoutes;