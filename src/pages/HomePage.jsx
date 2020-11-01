import React from 'react';
import { useSelector, } from 'react-redux'
import TopBar from '../components/TopBar';

function HomePage(props) {
  const isLogin = useSelector(state => state.user.isAuthentication)
  const username = useSelector(state => state.user.username)
  return (
    <div className="wrapper">
      <TopBar isLogin={isLogin} username={username} />
    </div>
  );
}

export default HomePage;