import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { MainGraph, Graph, Table } from './components/Graphics/MainGraph.jsx';
//import LineChart from './components/LineChart.jsx'


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
	<> 

		<Graph graph="temp"/>

		<Table />
	</>
);