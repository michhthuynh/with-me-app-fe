import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSearch, faUser, faVial } from "@fortawesome/free-solid-svg-icons";
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
    console.log(username)

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
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faVial} />
                        </NavLink>
                    </li>
                    <li style={{ position: "relative" }}>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                        <UserInfo username="test" isLogin={false} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
