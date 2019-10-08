import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";

export const receiveRoutes = (routes) => ({
    type: RECEIVE_ROUTES,
    routes,
})

export const receiveRoute = (route) => ({
    type: RECEIVE_ROUTE,
    route,
})

export const fetchRoutes = (routes) => (dispatch) => {
    return APIUtil.fetchRoutes(routes).then(routes => {
        return dispatch(receiveRoutes(routes))
    })
};

export const fetchRoute = (id) => (dispatch) => {
    return APIUtil.fetchRoutes(id).then(route => {
        return dispatch(receiveRoutes(route))
    })
};