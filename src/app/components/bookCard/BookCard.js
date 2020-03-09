import React from 'react';
import { Card } from 'react-bootstrap';

const BookCard = ({ book }) => {
	return (
		<Card border="primary">
			<Card.Body>
				<Card.Title>{book.book_title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{book.book_publication_city}, {book.book_publication_country}
				</Card.Subtitle>
				<Card.Text>
					Publication Year: <span className="text-info">{book.book_publication_year}</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default BookCard;
