import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {Auth0Provider} from '@auth0/auth0-react';

const domain = 'dev-j4hlmv8yfs1o8so8.us.auth0.com';
const clientId = 'f9E0RfK8LDuF4gY74HI65NlkIeXwB7ci';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
     domain={domain} 
    clientId={clientId}
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

