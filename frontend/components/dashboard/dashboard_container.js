import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { receiveCurrentUser, logout } from '../../actions/session_actions';

const msp = ({user}) => {
    return ({
        user
    })
}

const mdp = (dispatch) => {
    return {
        receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp)(Dashboard);