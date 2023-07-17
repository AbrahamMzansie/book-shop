import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";
import BookList from "./components/BookList";

import './App.css';
function App() {
  const [bookList, setBookList] = useState([]);

  const createBookHandler = (bookTitle) => {
    const newBookData = {
      id: Math.floor(Math.random() * (100 - 1) + 1),
      title: bookTitle,
    };
    setBookList([...bookList, newBookData]);
  }

  const onDeleteBookHandler = (id) => {
    const updatedBooks = bookList.filter(item => {
      return item.id !== id;
    });
    setBookList(updatedBooks);
  }
  const onEditBookHandler = (id , newTitle) => {
    const updatedBooks = bookList.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }  
      return book;
    });
    setBookList(updatedBooks);
  }


  return (
    <div className="App">
      <BookList onEditBookHandler = {onEditBookHandler} 
       onDeleteBookHandler={onDeleteBookHandler}
        bookList={bookList} />
      <BookCreate bookCreate={createBookHandler} />
    </div>
  );
}

export default App;
