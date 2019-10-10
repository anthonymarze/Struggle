import * as APIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";

export const receiveActivities = (activities) => ({
    type: RECEIVE_ACTIVITIES,
    activities,
})

export const receiveActivity = (activity) => ({
    type: RECEIVE_ACTIVITY,
    activity,
})

export const fetchActivities = (activities) => (dispatch) => {
    return APIUtil.fetchActivities(activities).then(activities => {
        return dispatch(receiveActivities(activities))
    })
};

export const fetchActivity = (id) => (dispatch) => {
    return APIUtil.fetchActivity(id).then(activity => {
        return dispatch(receiveActivity(activity))
    })
};

export const createActivity = (activity) => (dispatch) => {
    return APIUtil.createActivity(activity).then(activity => {
        return dispatch(receiveActivity(activity))
    },error => console.log(error))
};

export const fetchUserActivities = (user_id) => (dispatch) => {
    return APIUtil.fetchUserActivities(user_id).then(activities => {
        return dispatch(receiveActivities(activities))
    })
};