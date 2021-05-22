import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Signin from './components/Auth/Signin';
import AuthProvider from './Auth';
import PrivateRoute from './PrivateRoute';
import Profile from './components/profile/Profile';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <PrivateRoute exact path="/" component={Layout}/>
      <Route exact path="/signin" component={Signin}/>
      <PrivateRoute exact path="/profile/:id" component={Profile}/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
