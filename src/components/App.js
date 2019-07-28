import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Loading from './layout/Loading';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const AsyncOtherPage = importedComponent(
	() => import(/* webpackChunkName:'OtherPage' */ './pages/OtherPage'),
	{
		LoadingComponent: Loading
	}
);
const AsyncNoMatch = importedComponent(
	() => import(/* webpackChunkName:'NoMatch' */ './pages/NoMatch'),
	{
		LoadingComponent: Loading
	}
);

const App = () => {
	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/other-page" component={AsyncOtherPage} />
					<Route component={AsyncNoMatch} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default hot(App);
