import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.js';
import SignupFormContainer from './session_form/signup_form_container.js';
import Splash from './splash';

const App = () => {
    return (
        <div className="app-content">
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Splash />
        </div>
    );
};

export default App;