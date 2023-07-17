import React from 'react';
import useBooksContext from "../Hooks/user-books-context";

import "./BookList.css";
import BookShow from "./BookShow";

const BookList = () => {
const {bookList} = useBooksContext();
    
    return (
        <div className='bookList'>
            {bookList.map((book) => (
                <BookShow key={book.id} book={book} />
            ))}            
        </div>
    )
}

export default BookList