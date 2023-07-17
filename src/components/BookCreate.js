import React, { useState } from 'react';
import "./BookCreate.css";

const BookCreate = ({ bookCreate }) => {

    const [bookName, setBookName] = useState("");

    const bookCreateHandler = (event) => {
        event.preventDefault();
        bookCreate(bookName);
        setBookName("");
    }

    return (
        <div className='bookCreate'>
            <h2>Add A New Book</h2>
            <form onSubmit={bookCreateHandler} className='bookCreate-form'>
                <input value={bookName} onChange={(e) => setBookName(e.target.value)} type="text" placeholder='add book name' />
                <button>Add A Book</button>
            </form>
        </div>

    )
}

export default BookCreate;