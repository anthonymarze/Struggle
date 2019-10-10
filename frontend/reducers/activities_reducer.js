import {
    RECEIVE_ACTIVITIES,
    RECEIVE_ACTIVITY,
} from '../actions/activity_actions';

const activitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return action.activities;
        case RECEIVE_ACTIVITY:
            const newActivity = { [action.activity.id]: action.activity };
            return Object.assign({}, state, newActivity);
        default:
            return state;
    }
}

export default activitiesReducer;