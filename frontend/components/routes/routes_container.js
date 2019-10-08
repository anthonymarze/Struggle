import { connect } from 'react-redux';
import Routes from './routes';
import { fetchRoute } from '../../actions/route_actions'

const msp = state => {
    return ({
        state
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: id => dispatch(fetchRoute(id))
    })
}

export default connect(msp, mdp)(Routes)