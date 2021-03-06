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
    return APIUtil.fetchRoute(id).then(route => {
        return dispatch(receiveRoute(route))
    })
};

export const createRoute = (route) => (dispatch) => {
    return APIUtil.createRoute(route).then(route => {
        return dispatch(receiveRoute(route))
    })
};

export const fetchUserRoutes = (user_id) => (dispatch) => {
    return APIUtil.fetchUserRoutes(user_id).then(routes => {
        return dispatch(receiveRoutes(routes))
    })
};