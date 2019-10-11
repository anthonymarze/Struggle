import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { receiveCurrentUser, logout } from '../../actions/session_actions';
import { fetchUserRoutes } from '../../actions/route_actions';
import { fetchUserActivities } from '../../actions/activity_actions';

const msp = ({ users, session, activities, routes}) => {
    return ({
        currentUser: users[session.id],
        users,
        session,
        activities: Object.values(activities),
        routes: Object.values(routes),
    })
}

const mdp = (dispatch) => {
    return {
        receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
        fetchUserRoutes: (author_id) => dispatch(fetchUserRoutes(author_id)),
        fetchUserActivities: (athlete_id) => dispatch(fetchUserActivities(athlete_id)),
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(Dashboard);