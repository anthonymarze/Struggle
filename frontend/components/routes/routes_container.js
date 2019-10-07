import { connect } from 'react-redux';
import Routes from './routes';
import { logout } from '../../actions/session_actions'

const msp = state => {
    return ({
        state
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: id => dispatch(fetchRoute(id)),
        logout: () => dispatch(logout()),
    })
}

export default connect(msp, mdp)(Routes)