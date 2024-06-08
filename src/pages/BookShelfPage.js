import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/BookShelf';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    const removeFromBookshelf = (bookKey) => {
        const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div className="bookshelf-page">
            <div className='header-container'>
            <h1>My Bookshelf</h1>
            <button className='goto-button' onClick={() => window.location.href = '/'}>Back to Search</button>

            </div>
            <Bookshelf books={bookshelf} removeFromBookshelf={removeFromBookshelf} />
        </div>
    );
};

export default BookshelfPage;
