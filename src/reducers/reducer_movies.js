import _ from "lodash";
import { FETCH_MOVIES, GET_MOVIE_LIST, GET_MOVIE, CREATE_MOVIE } from '../actions/index';

const initialState = { all: [], movie: null, search: null };

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_MOVIE_LIST:
		//console.log('this is after promise',action.payload);
			return {
				all: state.all,
				movie: null,
				search: action.payload
			};
		case GET_MOVIE:
			//console.log('this is after promise',action.payload);
			//return merge({}, state, {movie: action.payload});
			return {
				all: state.all,
				movie: action.payload,
				search: null
			};
		case CREATE_MOVIE:
		//console.log('create movie payload: ',action.payload);
			return {
				all: _.concat(state.all,[action.payload]),
				movie: action.payload,
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