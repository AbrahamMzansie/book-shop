import { useContext } from 'react';
import BooksContext from '../Context/books';

const useBooksContext = () => {
    return useContext(BooksContext)
}

export default useBooksContext;