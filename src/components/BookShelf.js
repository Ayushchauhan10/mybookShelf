import React from 'react';
import BookCard from './BookCard';

const Bookshelf = ({ books, removeFromBookshelf }) => {
    return (
        <div className="bookshelf">
            {books.map(book => (
                <BookCard
                    key={book.key}
                    book={book}
                    removeFromBookshelf={removeFromBookshelf}
                    isBookshelfPage={true} 
                />
            ))}
        </div>
    );
};

export default Bookshelf;
