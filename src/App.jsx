import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// -- Auth0 --
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';


import { MainGraph, Graph, Table } from './components/Graphics/MainGraph.jsx';
//import LineChart from './components/LineChart.jsx'
import { Nav } from './components/Nav/Nav.jsx'



function App() {
	const [count, setCount] = useState(0)

	const { isAuthenticated, isLoading } = useAuth0();
	if (isLoading) return <h1>Loading...</h1>

	return (
		<div className="App">
			
			{
				isAuthenticated ?
				<LogoutButton />
				:
				<LoginButton />
			}
			{/* <Nav /> */}
			<Profile />
			<div>
				<Graph graph="temp" />
				<Graph graph="hum" />
				
			</div>

			
		</div>
	)
}

export default App
