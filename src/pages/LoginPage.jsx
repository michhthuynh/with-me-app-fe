import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import LoginForm from '../components/LoginForm';

function LoginPage(props) {
    return (
        <div className="login-wrapper">
            <LoginForm />
        </div>
    );
}

export default LoginPage;