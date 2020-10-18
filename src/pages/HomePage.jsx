import React from 'react';
import { useSelector } from 'react-redux'
import TopBar from '../components/TopBar';

function HomePage(props) {
    const isLogin = useSelector(state => state.user.isAuthentication)
    console.log('is Authentication: ', isLogin)

    return (
        <div className="wrapper">
            <TopBar isLogin={isLogin} />
        </div>
    );
}

export default HomePage;