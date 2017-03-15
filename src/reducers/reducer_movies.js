import { FETCH_MOVIES, FETCH_MOVIE, GET_MOVIE_LIST } from '../actions/index';

const initialState = { all: [], movie: null, search: null };

export default function(state = initialState, action) {
	switch(action.type) {
	case GET_MOVIE_LIST:
	console.log(action.payload.data.Search);
		return {
			all: state.all,
			movie: null,
			search: action.payload.data.Search
		};
	case FETCH_MOVIE:
		return {
			all: state.all,
			movie: action.payload.data,
			search: null
		};
	case FETCH_MOVIES:
		return {
			all: state.all.concat(action.payload.data),
			movie: null,
			search: null
		};
	default:
		return state;
	}
}