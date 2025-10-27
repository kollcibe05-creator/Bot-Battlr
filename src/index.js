import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/*ROOT FILE_ renders the app to the DOM*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
