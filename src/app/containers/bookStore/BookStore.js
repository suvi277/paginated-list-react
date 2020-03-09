import React, { Component } from 'react';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchBookList, navigateTo } from '../../actions';
import './BookStore.scss';
import BookCard from '../../components/bookCard/BookCard';
import BookListPagination from '../../components/pagination/BookListPagination';
import SearchBar from '../../components/search/SearchBar';
import Loader from '../../components/loader/Loader';

class BookStore extends Component {
	componentDidMount() {
		let { pageId } = this.props;
		pageId = pageId ? Number(pageId) : 1;
		// const URLQStrings = new URLSearchParams(this.props.search);
		// const code: string = URLQStrings.has('code') ? URLQStrings.get('code') : '';
		this.loadPaginatedList(pageId);
	}

	loadPaginatedList = (page) => {
		page > 1 && this.props.navigateTo(page);
		this.props.fetchBookList({ page });
	};

	searchBooks = (searchText) => {
		const { current_page } = this.props;

		this.props.fetchBookList({ page: current_page, searchText });
	};

	render() {
		const { isLoaded, current_page, books, count } = this.props;
		return (
			<main className="book-list-container">
				<Container>
					<Row>
						<Col xs={6}>
							<SearchBar searchBooks={this.searchBooks} />
						</Col>
						<Col>
							<BookListPagination
								loadPaginatedList={this.loadPaginatedList}
								active={current_page}
								totalPage={count}
							/>
						</Col>
					</Row>
					{!isLoaded && <Loader />}
					<CSSTransition in={isLoaded} timeout={500} classNames="content" unmountOnExit>
						<CardColumns>{books.map((book, index) => <BookCard key={index} book={book} />)}</CardColumns>
					</CSSTransition>
				</Container>
			</main>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoaded: state.bookList.isLoaded,
	books: state.bookList.books,
	current_page: state.bookList.current_page,
	count: state.bookList.count
});

const mapDispatchToProps = (dispatch) => {
	return {
		navigateTo: (page) => dispatch(navigateTo(page)),
		fetchBookList: (options) => dispatch(fetchBookList(options))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
