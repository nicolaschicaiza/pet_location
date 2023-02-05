import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { MainGraph, Graph, Table } from './components/Graphics/MainGraph.jsx';
//import LineChart from './components/LineChart.jsx'
import {Nav} from './components/Nav/Nav.jsx'

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
	<div> 
		<Nav />

		<div>
			<Graph graph="temp" />
			<Graph graph="hum" />

			
			<Table />
		</div>
	</div>
);