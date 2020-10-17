import React from 'react';
import { NavLink } from 'react-router-dom';
import ''

function TopBar(props) {
    return (
        <div className="top-bar">
            <div className="top-bar__left">
                <ul>
                    <NavLink to="/category/tv-series">TV Series</NavLink>
                    <NavLink to="/category/tv-shows">TV Shows</NavLink>
                    <NavLink to="/category/movies">Movies</NavLink>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;