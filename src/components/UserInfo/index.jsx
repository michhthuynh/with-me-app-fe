import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss'
import { NavLink } from 'react-router-dom';

UserInfo.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    username: PropTypes.string
};

UserInfo.defaultProps = {
    isLogin: false,
    username: ''
}

function UserInfo(props) {
    const { isLogin, username } = props
    return (
        <div className="user-info">
            {
                isLogin ?
                    <ul className="user-info__user">
                        <li>
                            <NavLink to="">Hoang Thanh Huynh</NavLink>
                        </li>
                        <li>
                            <NavLink to="">settings</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Logout</NavLink>
                        </li>
                    </ul> :
                    <ul className="user-info__login">
                        <li>
                            <NavLink to="">Sign in</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Login</NavLink>
                        </li>
                    </ul>
            }
        </div>
    );
}

export default UserInfo;