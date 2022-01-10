import React from 'react';
//import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Liquidator from './pages/Liquidator';
import Social from './pages/Social';
import Teams from './pages/Team';

function App() {
return (
	<Router>
		<Navbar />
		<Switch>
			<Route path='/home' exact component={Home} />
			<Route path='/liquidator' component={Liquidator} />
			<Route path='/social' component={Social} />
			<Route path='/team' component={Teams} />
		</Switch>
	</Router>
);
}

export default App;
