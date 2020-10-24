import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

UserInfo.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    display: PropTypes.bool.isRequired,
    username: PropTypes.string
};

UserInfo.defaultProps = {
    display: false,
    isLogin: false,
    username: ''
}

function UserInfo(props) {
    const { isLogin, username, display } = props
    return (
        <div className={display ? "user-info display" : "user-info"}>
            {
                isLogin ?
                    <ul className="user-info__user">
                        <li>
                            <div>Hoang Thanh Huynh</div>
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faCog} /></span>
                            <NavLink to="/account">settings</NavLink>
                        </li>
                        <li>
                            <span><FontAwesomeIcon icon={faSignOutAlt} /></span>
                            <NavLink to="/auth/logout">Logout</NavLink>
                        </li>
                    </ul> :
                    <ul className="user-info__login">
                        <li>
                            <NavLink to="/account/register">Sign in</NavLink>
                        </li>
                        <li>
                            <NavLink to="auth/login">Login</NavLink>
                        </li>
                    </ul>
            }
        </div>
    );
}

export default UserInfo;