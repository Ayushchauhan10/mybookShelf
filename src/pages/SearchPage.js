import React, { useState, useEffect } from 'react';
import BookSearch from '../components/BookSearch';

const SearchPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div className="search-page">
            <div className='header-container'>

            <h1>BookSearch Page </h1>
            <button className='goto-button' onClick={() => window.location.href = '/bookshelf' }>Go to My Bookshelf</button>
            </div>
            <BookSearch addToBookshelf={addToBookshelf} />
        </div>
    );
};

export default SearchPage;
