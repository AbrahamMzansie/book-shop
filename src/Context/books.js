import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
    const [bookList, setBookList] = useState([]);

    const retriveAllBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBookList(response.data)
    }
    
    const createBookHandler = async (bookTitle) => {
        const response = await axios.post("http://localhost:3001/books", {
            title: bookTitle,
        });
        setBookList([...bookList, response.data]);
    }

    const onDeleteBookHandler = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = bookList.filter(item => {
            return item.id !== id;
        });
        setBookList(updatedBooks);
    }
    const onEditBookHandler = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        const updatedBooks = bookList.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book;
        });
        setBookList(updatedBooks);
    }

    const mapDataToProps = {
        bookList,
        retriveAllBooks,
        createBookHandler,
        onDeleteBookHandler,
        onEditBookHandler
    }

    return (
        <BooksContext.Provider value={mapDataToProps}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;