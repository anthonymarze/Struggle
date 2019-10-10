export const fetchActivities = (activity) => {
    return $.ajax({
        method: 'GET',
        url: 'api/activities',
        data: activity,
    })
};

export const fetchActivity = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/activities/${id}`,
    })
};

export const createActivity = (activity) => {
    return $.ajax({
        method: 'POST',
        url: `api/activities`,
        data: { activity }
    })
};

export const fetchUserActivities = (athlete_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/activities?athlete_id=${athlete_id}`
    })
}