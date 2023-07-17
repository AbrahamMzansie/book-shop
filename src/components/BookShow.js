import React from 'react';
import "./BookShow.css";
import BookEdit from './BookEdit';

const BookShow = ({ book, onDeleteBookHandler , onEditBookHandler }) => {

    const [showEdit, setShowEdit] = React.useState(false);
    const deleteBookHandler = (id) => {
        onDeleteBookHandler(id);
    }

    const editBookHandler = () => {
        setShowEdit(!showEdit);
    }
    const hideEditFormHandler = () => {
        setShowEdit(false);
    }


    return (
        <div className='bookShow-container'>
            <img className="book-image" alt = "books" src={`https://picsum.photos/seed/${book.id} /200`}/>
            <div className="book-show-button">
                <button onClick = {editBookHandler} className='edit-book'>Edit</button>
                <button onClick={() => deleteBookHandler(book.id)} className='delete-book'>Delete</button>
            </div>
            <div className='title'>
                <p>{book.title}</p>
            </div>
            <div className='edit-book-container'>
                {showEdit && <BookEdit 
                 onEditBookHandler = {onEditBookHandler}
                 hideEditFormHandler = {hideEditFormHandler}
                 book = {book} />}
            </div>


        </div>
    )
}

export default BookShow;