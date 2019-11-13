import React from "react";

class FeedItems extends React.Component {
    render() {
        return(
            <div className="feed-item-container">
                <div className="entry-header">
                    <span className="circle" id="feed-circle">
                        <p className="circle-user-name" id="feed-user-name">{this.props.currentUser.first_name[0]}</p>
                    </span>
                    <div className="user-info-box">
                        <p className="entry-user-name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                        <p className="entry-user-date"> {this.props.props.date_and_time} </p> 
                    </div>
                </div>
                <div className="entry-body">
                    <h2>{this.props.props.title}</h2>
                    <div className="entry-body-data">
                        <div className="entry-body-data-piece">
                            <p className="entry-body-label">
                                Distance
                            </p>
                            <p className="entry-body-numbers">
                                {this.props.props.distance}mi
                            </p>
                        </div>
                        <div className="entry-body-data-piece">
                            <p className="entry-body-label">
                                Time
                            </p>
                            <p className="entry-body-numbers">
                                {this.props.props.time}m
                            </p>
                        </div>
                        <div className="entry-body-data-piece">
                            <p className="entry-body-label">
                                Elevation
                            </p>
                            <p className="entry-body-numbers">
                                {this.props.props.elevation}m
                            </p>
                        </div>
                    </div>
                </div>
                <div className="entry-footer">
                </div>
            </div>
        )
    }
}

export default FeedItems;