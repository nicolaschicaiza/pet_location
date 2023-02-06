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
			<Nav />
			<div>
				<Graph graph="temp" />
				<Graph graph="hum" />
				<Table />
			</div>

			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

export default App
