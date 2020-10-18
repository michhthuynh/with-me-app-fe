import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-violet.png'

function TopBar(props) {
    return (
        <div className="top-bar">
            <NavLink to="/"><img src={logo} /></NavLink>
            <div className="top-bar__left">
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
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;