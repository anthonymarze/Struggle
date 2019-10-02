import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({currentUser, logout}) => {
    return (
        <div>
            <header></header>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
};

export default Splash;