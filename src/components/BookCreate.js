import React, { useState} from 'react';
import "./BookCreate.css";
import useBooksContext from "../Hooks/user-books-context";

const BookCreate = () => {

    const { createBookHandler } = useBooksContext();

    const [bookName, setBookName] = useState("");

    const bookCreateHandler = (event) => {
        event.preventDefault();
        createBookHandler(bookName);
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