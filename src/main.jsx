import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import LineChart from './components/LineChart.jsx'


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
	<> 
		<LineChart />
	</>
);