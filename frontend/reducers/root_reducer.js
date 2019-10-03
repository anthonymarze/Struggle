import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    errors: errorsReducer,
});

export default rootReducer;