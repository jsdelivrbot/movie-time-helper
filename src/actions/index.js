import axios from 'axios';
import omdb from 'omdbapi';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const LOG_MOVIE = 'LOG_MOVIE';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const GET_MOVIE_LIST = 'GET_MOVIE_LIST';
export const GET_MOVIE = 'GET_MOVIE';


export function getMovieList(term){
	const request = omdb.search({
    search: term 
  });
  console.log(request, 'searchterm',term);
	return {
		type: GET_MOVIE_LIST,
		payload: request
	};
}

export function getMovie(id){
	const request = omdb.get({
    id: id,
    plot: 'full',
    tomatoes: 'true' 
  });
  console.log(request, 'id:',id);
	return {
		type: GET_MOVIE,
		payload: request
	};
}

export function fetchMovies() {
	const request = null;

	return {
		type: FETCH_MOVIES,
		payload: request
	};
}

export function createMovie(props) {
	const request = props;

	return {
		type: LOG_MOVIE,
		payload: request
	};
}

export function fetchMovie(id) {
	const request = id;

	return {
		type: FETCH_MOVIE,
		payload: request
	};
}

export function deleteMovie(id) {
	const request = id;

	return {
		type: DELETE_MOVIE,
		payload: request
	};
}