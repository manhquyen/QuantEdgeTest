import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleTabs from './SimpleTabs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <SimpleTabs />
    , document.getElementById('root'));
registerServiceWorker();
