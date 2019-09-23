import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
