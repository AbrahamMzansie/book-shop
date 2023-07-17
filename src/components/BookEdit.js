import React, { useState } from 'react';
import "./BookEdit.css";

const BookEdit = ({ book, onEditBookHandler , hideEditFormHandler }) => {

    const [title, setTitle] = useState(book.title);
    const bookEditHandler = (e) => {
        e.preventDefault();
        onEditBookHandler(book.id, title);
        hideEditFormHandler();
    }

    return (
        <div className='edit-book-wrapper'>
            <hr />
            <form onSubmit={bookEditHandler} className='bookCreate-form'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' />
                <button>Save</button>
            </form>
        </div>
    )
}

export default BookEdit