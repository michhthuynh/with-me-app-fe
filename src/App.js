import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import SignUpPage from './pages/SignUpPage';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUsername, verifyLogin } from './actions/user';
import auth from './api/auth';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await auth.getCheckLogin()
        dispatch(verifyLogin(true))
        dispatch(addUsername(localStorage.getItem('username')))
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetch()
  })
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/auth/login" exact component={LoginPage} />
          <Route path="/auth/logout" exact component={LogoutPage} />
          <Route path="/auth/signup" exact component={SignUpPage} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
