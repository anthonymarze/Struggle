import { connect } from 'react-redux';
import RoutesShow from './routes_show';
import { fetchRoute, fetchUserRoutes } from '../../actions/route_actions'

const msp = ({ }) => {
    return ({
       
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: id => dispatch(fetchRoute(id)),
        fetchUserRoutes: author_id => dispatch(fetchUserRoutes(author_id)),
    })
}

export default connect(msp, mdp)(RoutesShow)