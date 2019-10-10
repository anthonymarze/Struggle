export const fetchRoutes = (routes) => {
    return $.ajax({
        method: 'GET',
        url: 'api/routes',
        data: routes,
    })
};

export const fetchRoute = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/routes/${id}`,
    })
};

export const createRoute = (route) => {
    return $.ajax({
        method: 'POST',
        url: `api/routes`,
        data: {route}
    })
};

export const fetchUserRoutes = (author_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/routes?author_id=${author_id}`
    })
}