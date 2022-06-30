import React from 'react'
import './styles/app.scss'
import Toolbar from './components/Toolbar'
import Settingbar from './components/Settingbar'
import Canvas from './components/Canvas'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route path='/:id'>
          <Toolbar />
          <Settingbar />
          <Canvas />
        </Route>
        <Redirect to={`f${(+ new Date()).toString(16)}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
