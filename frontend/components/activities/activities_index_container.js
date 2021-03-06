import { connect } from 'react-redux';
import ActivitiesIndex from './activities_index';
import { fetchActivity, fetchUserActivities } from '../../actions/activity_actions'
import { logout } from '../../actions/session_actions'


const msp = ({ users, session, activities }) => {
    return ({
        currentUser: users[session.id],
        users,
        session,
        activities: Object.values(activities),
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        fetchActivity: id => dispatch(fetchActivity(id)),
        fetchUserActivities: athlete_id => dispatch(fetchUserActivities(athlete_id)),
    })
}

export default connect(msp, mdp)(ActivitiesIndex)