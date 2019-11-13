import React from 'react';
import FeedItems from './feed_items';
import { logoutCurrentUser } from '../../actions/session_actions';

class Feed extends React.Component {

    // constructor(props){
    //     super(props);
    //     debugger
    // }

    createFeedItems() {
        const feed = [];

        for (let i = 0; i < this.props.activities.length; i++) {
            feed.push(<FeedItems key={this.props.activities[i].id.toString()} props={this.props.activities[i]} />)
        }
        return feed;
    }

    render() {
    //     const activitiesFeed = this.props.activities.reverse().map(activity => {
    //         <h3>{this.props.currentUser.first_name}</h3>
    //         <p>{activity.title}</p>
    //         <p>{activity.</p>
    //     })

        return (
            <div className="feedbox">
               <img src="//d3nn82uaxijpm6.cloudfront.net/assets/premium/feed-promo/Summit_FebTrials_Running_592x148-WebDorado@1x-6ec5df2808c8ff6c780c872ad0a9a91e221eb06c2c96a1660e0bbcc9d8cc1370.jpg"/>
               <div className="subFeedBox">
                   {this.createFeedItems()}
               </div>
            </div> 
        )
    }
}

export default Feed;