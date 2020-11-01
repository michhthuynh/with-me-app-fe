import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faVial } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-violet.png'
import './TopBar.scss'
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';
import UserInfo from '../UserInfo';

TopBar.propTypes = {
    username: PropTypes.string,
    isLogin: PropTypes.bool
}

TopBar.defaultProp = {
    username: '',
    isLogin: false
}

function TopBar(props) {
    const { isLogin, username } = props
    const inputRef = useRef()

    const [isHiddenInput, setIsHiddenInput] = useState(true)
    const [isShowUserInfo, setIsShowUserInfo] = useState(false)

    useEffect(() => {
        if (!isHiddenInput) {
            inputRef.current.focus();
        }
    }, [isHiddenInput]);

    const handleHiddenSearch = () => {
        setIsHiddenInput(false)
    }

    const handleBlur = () => {
        setIsHiddenInput(true)
    }

    const handleShowUserInfo = () => {
        setIsShowUserInfo(!isShowUserInfo)
    }

    return (
        <div className="top-bar">
            <div className="top-bar__left">
                <NavLink to="/" className="logo"><img src={logo} /></NavLink>
                <ul>
                    <li>
                        <NavLink to="/categories/tv-series">TV Series</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories/tv-shows">TV Shows</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories/movies">Movies</NavLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar__right">
                <ul>
                    <li>
                        {
                            isHiddenInput ?
                                <button onClick={handleHiddenSearch} htmlFor="search-bar">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button> :
                                <input type="text" className={isHiddenInput ? "hidden" : ""} id="searchBar" onBlur={handleBlur} ref={inputRef} />
                        }
                    </li>
                    <li>
                        <NavLink to="/account/vip">
                            <FontAwesomeIcon icon={faVial} />
                        </NavLink>
                    </li>
                    <li style={{ position: "relative" }}>
                        <button onClick={handleShowUserInfo}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <UserInfo username={username} display={isShowUserInfo} isLogin={isLogin} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
