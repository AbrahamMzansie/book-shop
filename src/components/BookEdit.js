import React, { useState } from 'react';
import "./BookEdit.css";
import useBooksContext from "../Hooks/user-books-context";


const BookEdit = ({ book,hideEditFormHandler }) => {
    const {onEditBookHandler} = useBooksContext();
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