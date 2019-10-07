import { connect } from 'react-redux';
import NewRoutes from './routes';
import { logout } from '../../actions/session_actions'

const msp = state => {
    return ({
        state
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(msp, mdp)(NewRoutes)