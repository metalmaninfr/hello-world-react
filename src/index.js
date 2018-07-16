import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import helloworld from './components/HelloWorld';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
