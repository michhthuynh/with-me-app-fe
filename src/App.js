import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import SignUpPage from './pages/SignUpPage';

function App() {
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
