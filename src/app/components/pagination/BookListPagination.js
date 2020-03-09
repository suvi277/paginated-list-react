import React from 'react';
import { Pagination } from 'react-bootstrap';

const BookListPagination = ({ active, loadPaginatedList, totalPage }) => {
	let items = [],
		number_of_pages = totalPage / 20;

	const onPaginationClicked = (e) => {
		const page = Number(e.target.text);
		loadPaginatedList(page);
	};

	//Setting No. of pages to 10 for now
	// TODO:
	number_of_pages = 10; //HARD CODE

	for (let number = 1; number < number_of_pages ; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active} onClick={onPaginationClicked}>
				{number}
			</Pagination.Item>
		);
	}

	return <Pagination className="float-right">{items}</Pagination>;
};
export default BookListPagination;
