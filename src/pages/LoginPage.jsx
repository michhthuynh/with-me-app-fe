import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import LoginForm from '../components/LoginForm';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LoginPage(props) {
    const history = useHistory()
    const logged = useSelector(state => state.user.isAuthentication)

    return (
        !logged ?
            <div className="login-wrapper">
                <LoginForm />
            </div> :
            <Redirect to="/" />
    );
}

export default LoginPage;