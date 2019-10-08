import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import CreateProfileFormContainer from './create_profile_form/create_profile_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RoutesContainer from './routes/routes_container';
import NewRoutesContainer from './routes/new_routes_container';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="app-content">
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
                <ProtectedRoute exact path="/routes/new" component={NewRoutesContainer} />
                <ProtectedRoute exact path="/routes" component={RoutesContainer} />
                <Route exact path="/signup/onboarding" component={CreateProfileFormContainer} />
                <Splash/>
            </Switch>
        </div>
    );
};

export default App;