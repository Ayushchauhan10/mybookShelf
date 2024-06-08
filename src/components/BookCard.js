import React, { useState, useEffect } from 'react';

const BookCard = ({ book, addToBookshelf, removeFromBookshelf, isBookshelfPage }) => {
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        // Check if the book is already in localStorage
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setIsAdded(bookshelf.some(b => b.key === book.key));
    }, [book]);

    const handleAddToBookshelf = () => {
        if (!isAdded) {
            addToBookshelf(book);
            setIsAdded(true);
        }
    };

    const handleRemoveFromBookshelf = () => {
        removeFromBookshelf(book.key);
        setIsAdded(false);
    };

    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name?.join(', ')}</p>
            {isAdded ? (
                <>
                   <button className='book-card-button' disabled style={{ backgroundColor: '#808080', color: '#fff' }}>Added to Bookshelf</button>
                    {isBookshelfPage && <button className='book-card-button' onClick={handleRemoveFromBookshelf}>Remove</button>}
                </>
            ) : (
                <button  className='book-card-button' onClick={handleAddToBookshelf}>Add to Bookshelf</button>
            )}
        </div>
    );
};

export default BookCard;
