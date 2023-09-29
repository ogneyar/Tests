
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// импорт App
import { App } from './components/app';

// обработка компонента App и помещение его в HTML элемент '#app'
// ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById( 'app' ) );
ReactDOM.hydrate( <BrowserRouter><App/></BrowserRouter>, document.getElementById( 'app' ) );
