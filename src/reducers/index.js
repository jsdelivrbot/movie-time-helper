import { combineReducers } from 'redux';
import MovieReducer from './reducer_movies';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
	movies: MovieReducer,
	routing
});

export default rootReducer;
