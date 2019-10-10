import { connect } from 'react-redux';
import RoutesIndex from './routes_index';
import { fetchRoute, fetchUserRoutes } from '../../actions/route_actions'

const msp = ({users, session, routes}) => {
    return ({
        users,
        session,
        routes: Object.values(routes),
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: id => dispatch(fetchRoute(id)),
        fetchUserRoutes: author_id => dispatch(fetchUserRoutes(author_id)),
    })
}

export default connect(msp, mdp)(RoutesIndex)