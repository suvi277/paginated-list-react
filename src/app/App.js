import React from 'react';
import { Switch, Route } from 'react-router';
import BookPage from './pages/BookPage';
import './_shared/styles/main.scss';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={BookPage} />
			<Route path="/book-list/:pageId" component={BookPage} />
		</Switch>
	);
}

export default App;
