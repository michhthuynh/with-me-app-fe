import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LoginForm.scss'
import logo from '../../assets/logo-violet.png'
import { NavLink } from 'react-router-dom';

function LoginForm(props) {
    return (
        <form className="login-form">
            <div className="login-form__title">
                <span>LOG IN</span>
                <div className="logo">
                    Wi
                </div>
            </div>
            <div className="login-form__login">
                <div className="form-group">
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit">Login</button>
            </div>
            <div className="login-form__another">
                <div>
                    Go to
                    <span>
                        <NavLink to="/">Homepage</NavLink>
                    </span>
                </div>
                <div>
                    Have not the account!
                    <span>
                        <NavLink to="/account/register">Sign up</NavLink>
                    </span>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;