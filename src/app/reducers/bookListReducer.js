import * as ACTION_TYPES from '../actions/types';

const initialState = {
	isLoaded: false,
	books: [],
	filters: []
};

export default function bookListReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.REQUEST_BOOKS:
			return {
				...state,
				isLoaded: false
			};
		case ACTION_TYPES.BOOKS_LOADED:
			const { books, count } = action.payload.data;
			return {
				...state,
				books,
				count,
				filters: action.payload.filters,
				current_page: action.payload.page,
				isLoaded: true
			};
		default:
			return state;
	}
}
