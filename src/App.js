import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./Context/books";

import './App.css';
function App() {

  const { retriveAllBooks } = useContext(BooksContext);

  useEffect(() => {
    retriveAllBooks();
  }, []);

  return (
    <div className="App">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
