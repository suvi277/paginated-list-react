import * as ACTION_TYPES from './types';
import { API_ENDPOINT } from '../config/endpoint';
import ApiService from './apiService';
import { push } from 'connected-react-router'

const defaultOptions = {
	page: 1,
	itemsPerPage: 20,
	filters: []
};

const requestBooks = () => {
	return {
		type: ACTION_TYPES.REQUEST_BOOKS
	};
};

const booksLoaded = (data, page, filters) => {
	return {
		type: ACTION_TYPES.BOOKS_LOADED,
		payload: {
			data,
			page,
			filters
		}
	};
};

export const fetchBookList = (options) => {
	const { page, searchText } = options;
	
	if (searchText) {
		defaultOptions.filters.push({
			type: 'all',
			values: [searchText]
		});
	} else {
		defaultOptions.filters = [];
	}
	return (dispatch, getState) => {
		dispatch(requestBooks());
		return ApiService.post(
			`${API_ENDPOINT}/api/books`,
			{ params: { ...defaultOptions, ...options } },
			(status, data) => {
				dispatch(booksLoaded(data, page, defaultOptions.filters));
			}
		);
	};
};

export const navigateTo = (page) => (dispatch) => dispatch(push(`/book-list/${page}`));
