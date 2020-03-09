import React from 'react';
import Header from '../components/header/Header';
import BookStore from '../containers/bookStore/BookStore';
import Footer from '../components/footer/Footer';

function BookPage(props) {
	return (
		<div className="d-flex flex-column">
			<Header title="OnTrack Front End Developer Test" />
			<BookStore pageId={props.match.params.pageId}/>
			<Footer />
		</div>
	);
}

export default BookPage;
