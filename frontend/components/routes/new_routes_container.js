import { connect } from 'react-redux';
import NewRoutes from './new_routes';
import { fetchRoute } from '../../actions/route_actions';

const msp = state => {
    return ({
        state
    })
}

const mdp = dispatch => {
    return ({
        createRoute: (route) => dispatch(fetchRoute(route))
    })
}

export default connect(msp, mdp)(NewRoutes)