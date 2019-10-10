import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import routesReducer from './routes_reducer';
import { combineReducers } from 'redux';
import activitiesReducer from './activities_reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    errors: errorsReducer,
    routes: routesReducer,
    activities: activitiesReducer,
});

export default rootReducer;