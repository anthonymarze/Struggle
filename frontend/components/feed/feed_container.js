import Feed from './feed';
import { connect } from 'react-redux';
// import { receiveCurrentUser, logout } from '../../actions/session_actions';

const msp = ({ user, routes, activities }) => {
    return ({
        user,
        routes,
        activities,
    })
}

// const mdp = (dispatch) => {
//     return {
//         receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
//         logout: () => dispatch(logout()),
//     };
// };

export default connect(msp, null)(Feed);