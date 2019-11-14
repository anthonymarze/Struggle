import React from "react";

class FeedItems extends React.Component {
    constructor(props) {
        super(props);
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        // this.hour = this.props.props.duration.slice(11, 13);
        // this.min = this.props.props.duration.slice(14, 16);
        // this.sec = this.props.props.duration.slice(17, 19);
        this.elevation = this.props.props.elevation;
        this.distance = this.props.props.distance;
        
        // if(this.props.props.distance === null){
        //     this.hour = 0;
        //     this.min = 0;
        //     this.sec = 0;
        // }
        if (this.props.props.elevation === null) {
            this.elevation = 0;
        }
        if (this.props.props.distance === null) {
            this.distance = 0;
        }
    }
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
                                {this.distance}mi
                            </p>
                        </div>
                        <div className="entry-body-data-piece">
                            <p className="entry-body-label">
                                Time
                            </p>
                            <p className="entry-body-numbers">
                                {this.min}m {this.sec}s
                            </p>
                        </div>
                        <div className="entry-body-data-piece">
                            <p className="entry-body-label">
                                Elevation
                            </p>
                            <p className="entry-body-numbers">
                                {this.elevation}m
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