import _ from "lodash";
import { FETCH_MOVIES, GET_MOVIE_LIST, GET_MOVIE, CREATE_MOVIE, DELETE_MOVIE } from '../actions/index';

const initialState = { all: [], movie: null, search: null };

export default function(state = initialState, action) {
	switch(action.type) {
		case DELETE_MOVIE:
		//console.log('create movie payload: ',action.payload);
			const idArray = state.all.map((movie) => movie.imdbID);
			const idIndex = _.indexOf(idArray, action.payload.imdbID);	
			if(idIndex >= 0){
				return {
				all: _.remove(state.all, (value, index, array) => index != idIndex),
				movie: null,
				search: null
				};
			}
			return {
				all: state.all,
				movie: null,
				search: null
			};
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
			const idsArray = state.all.map((movie) => movie.imdbID);
			const duplicate = _.includes(idsArray, action.payload.imdbID);
			if (!duplicate) {
				return {
					all: _.concat(state.all ,[action.payload]),
					movie: action.payload,
					search: state.search
				};
			} else {
					return {
					all: state.all,
					movie: action.payload,
					search: state.search
					};
				}

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