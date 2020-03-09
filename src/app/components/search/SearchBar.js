import React, { useRef } from 'react';
import { Button, Form, FormControl, Col } from 'react-bootstrap';

const SearchBar = ({ searchBooks }) => {
	const inputEl = useRef(null);
	const onSearchCLick = () => {
		searchBooks(inputEl.current.value);
	};
	return (
		<Form>
			<Form.Row>
				<Col xs={9}>
					<FormControl ref={inputEl} type="text" placeholder="Search" />
				</Col>
				<Col>
					<Button variant="outline-primary" onClick={onSearchCLick}>
						Search
					</Button>
				</Col>
			</Form.Row>
		</Form>
	);
};
export default SearchBar;
