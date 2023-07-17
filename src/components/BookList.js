import React from 'react';
import "./BookList.css";
import BookShow from "./BookShow";

const BookList = ({ bookList, onDeleteBookHandler, onEditBookHandler }) => {
    return (
        <div className='bookList'>
            {bookList.map((book) => (
                <BookShow onDeleteBookHandler={onDeleteBookHandler}
                    onEditBookHandler={onEditBookHandler}
                    key={book.id} book={book} />
            ))}

        </div>
    )
}

export default BookList