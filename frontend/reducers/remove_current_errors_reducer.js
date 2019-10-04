import { REMOVE_CURRENT_ERRORS } from '../actions/session_actions';

const removeCurrentErrorsReducer = (state, action) => {
    Object.freeze(state);
    switch (action.type) {
        case REMOVE_CURRENT_ERRORS:
            return Object.assign({}, state, {session: []});
        default:
            return state;
    }
}

export default removeCurrentErrorsReducer;