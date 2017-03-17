import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import MovieIndex from './containers/movie_index';
import SearchPage from './containers/search_page';
import MovieDetails from './containers/movie_details';

export default (
  <Route path='/' component={App}>
		<IndexRoute component={MovieIndex} />
		<Route path='search' components={SearchPage} />
		<Route path='search/:id' components={MovieDetails} />
  </Route>
);
