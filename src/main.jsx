import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// --- AUTH0 ---
import { Auth0Provider } from "@auth0/auth0-react";
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
console.log(domain, clientId)

//Elemento raiz
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
	<div> 

		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
			cacheLocation='localstorage'
			>
			<App />
		</Auth0Provider>

	</div>
);