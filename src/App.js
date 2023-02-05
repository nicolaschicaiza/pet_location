import React, { useState } from "react";
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { MainGraph, Graph, Table } from './components/Graphics/MainGraph.jsx';


import { LineChart } from './components/Graphics/LineChart';

//tutoriral metodos post y get con react en axios:
//https://www.youtube.com/watch?v=BTUSw5AH4qA 

function App() {

	const { isAuthenticated, isLoading } = useAuth0();


	if (isLoading) return <h1>Loading...</h1>

	return (
		<div className="App">
			<h1> Application</h1>
			{
				isAuthenticated ?

					<LogoutButton />
					:
					<LoginButton />
			}

			<Profile />

			<Table />



		</div>
	);
}


export default App;