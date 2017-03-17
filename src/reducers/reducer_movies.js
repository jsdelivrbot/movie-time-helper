import { FETCH_MOVIES, FETCH_MOVIE, GET_MOVIE_LIST, LOG_MOVIE } from '../actions/index';

const initialState = { all: [], movie: null, search: null };

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_MOVIE_LIST:
		console.log('this is after promise',action.payload);
			return {
				all: state.all,
				movie: null,
				search: action.payload
			};
		case LOG_MOVIE:
			return {
				all: state.all.concat(action.payload.data),
				movie: action.payload.data,
				search: null
			};
		case FETCH_MOVIE:
			return {
				all: state.all,
				movie: action.payload.data,
				search: null
			};
		case FETCH_MOVIES:
			return {
				all: state.all,
				movie: null,
				search: null
			};
		default:
			return state;
	}
}