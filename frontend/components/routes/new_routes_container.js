import { connect } from 'react-redux';
import NewRoutes from './new_routes';
import { fetchRoutes, createRoute } from '../../actions/route_actions'

const msp = state => {
    return ({
        state
    })
}

const mdp = dispatch => {
    return ({
        fetchRoutes: () => dispatch(fetchRoutes()),
        createRoute: route => dispatch(createRoute(route)),
    });
};

export default connect(msp, mdp)(NewRoutes)