import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import history from "./utils/history";


// --- AUTH0 ---
import { Auth0Provider } from "@auth0/auth0-react";
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
    domain: domain,
    clientId: clientId,
    onRedirectCallback,
    authorizationParams: {
        redirect_uri: window.location.origin,
    },
    cacheLocation: 'localstorage'
};

//Elemento raiz
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(


		<Auth0Provider {...providerConfig}>
			<App />
		</Auth0Provider>


);
