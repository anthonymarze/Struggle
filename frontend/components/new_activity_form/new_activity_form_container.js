import { connect } from 'react-redux';
import NewActivityForm from './new_activity_form';
import { createActivity } from '../../actions/activity_actions';
import { logout } from '../../actions/session_actions';

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        createActivity: activity => dispatch(createActivity(activity)),
    })
}

export default connect(null, mdp)(NewActivityForm);