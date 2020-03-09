import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bookList from './bookListReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    bookList
})

export default createRootReducer