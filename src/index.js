import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/App";


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
