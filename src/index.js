import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from "./components/Router";


ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
