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