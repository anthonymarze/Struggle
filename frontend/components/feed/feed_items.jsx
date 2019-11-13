import React from "react";

class FeedItems extends React.Component {
    render() {
        return(
            <div className="feed-item-container">
                <h1>{this.props.props.title}</h1>
            </div>
        )
    }
}

export default FeedItems;