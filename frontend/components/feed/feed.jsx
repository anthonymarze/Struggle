import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';

class Feed extends React.Component {

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
               </div>
            </div> 
        )
    }
}

export default Feed;