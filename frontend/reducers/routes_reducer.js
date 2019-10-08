import {
    RECEIVE_ROUTES,
    RECEIVE_ROUTE,
} from '../actions/route_actions';

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            const newRoute = { [action.route.id]: action.route };
            return Object.assign({}, state, newRoute);
        default:
            return state;
    }
}

export default routesReducer;