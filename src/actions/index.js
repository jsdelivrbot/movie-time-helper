import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const GET_MOVIE_LIST = 'GET_MOVIE_LIST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asdasddd123232131233';

const MOVIE_ROOT_URL = 'http://www.omdbapi.com/?';
const MOVIE_API_KEY = 'apikey=[7e64b825]&';

export function getMovieList(term){
	const request = axios.get(`${MOVIE_ROOT_URL}${MOVIE_API_KEY}s=${term}`);
	console.log('this is a getMovieList request:', request)

	return {
		type: GET_MOVIE_LIST,
		payload: request
	};
}

export function fetchMovies() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	console.log('this is a fetchMovies request:', request)

	return {
		type: FETCH_MOVIES,
		payload: request
	};
}

export function createMovie(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_MOVIE,
		payload: request
	};
}

export function fetchMovie(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_MOVIE,
		payload: request
	};
}

export function deleteMovie(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_MOVIE,
		payload: request
	};
}