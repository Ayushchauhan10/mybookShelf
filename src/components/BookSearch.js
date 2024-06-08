import React, { useState } from 'react';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async (e) => {
        // console.log(" call recieved search");
        setQuery(e.target.value);
        if (e.target.value.length) {
            const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            const data = await response.json();
            // console.log(data);
            setBooks(data.docs);
        } else {
            setBooks([]);
        }
    };

    return (
        <div className="book-search">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for books"
            />
            <div className="search-results">
                {books.map(book => (
                    <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
