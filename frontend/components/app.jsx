import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.js';
import SignupFormContainer from './session_form/signup_form_container.js';
import CreateProfileFormContainer from './create_profile_form/create_profile_form_container';
import Splash from './splash';

const App = () => {
    return (
        <div className="app-content">
            <Switch>
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/signup" component={SignupFormContainer} />
                <Route exact path="/signup/onboarding" component={CreateProfileFormContainer} />
                <Splash/>
            </Switch>
        </div>
    );
};

export default App;