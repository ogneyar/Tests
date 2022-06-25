import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Tutorial from './pages/tutorials/Tutorial';


const App = () => {
  return (
    <BrowserRouter>
        
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Tutorial } path="/tutorials" />
          <Redirect to="/" />
        </Switch>
    
    </BrowserRouter> 
  )
}


export default App;
