import { connect } from 'react-redux';
import Map from './map';
import { createRoute } from '../../actions/route_actions';

const msp = ({errors, session, users}) => {
    return ({
        errors,
        session,
        users,
    })
}

const mdp = (dispatch) => {
    return {
        createRoute: route => dispatch(createRoute(route))
    };
};

export default connect(msp, mdp)(Map);