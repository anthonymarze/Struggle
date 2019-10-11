import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CreateProfileFormContainer from './create_profile_form/create_profile_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RoutesIndexContainer from './routes/routes_index_container';
import NewRoutesContainer from './routes/new_routes_container';
import ActivitiesIndexContainer from './activities/activities_index_container';
import NewActivityFormContainer from './new_activity_form/new_activity_form_container';
import SplashContainer from './splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="app-content">
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/signup/onboarding" component={CreateProfileFormContainer} />
                <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
                <ProtectedRoute exact path="/routes/new" component={NewRoutesContainer} />
                <ProtectedRoute exact path="/routes" component={RoutesIndexContainer} />
                <ProtectedRoute exact path="/activities" component={ActivitiesIndexContainer} />
                <ProtectedRoute exact path="/activities/new" component={NewActivityFormContainer} />
                <Route exact path="/" component={SplashContainer} />
            </Switch>
        </div>
    );
};

export default App;