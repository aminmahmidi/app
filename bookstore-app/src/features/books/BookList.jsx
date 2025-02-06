import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, deleteBook } from "./BookSlice";
import { Outlet, useNavigate } from "react-router-dom";

const BookList = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Books</h2>
      <button onClick={() => navigate("/books/add")}>Add Book</button>
      {books.map((e) => {
        console.log(e.title);
      })}
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
            <button onClick={() => navigate(`/books/edit/${book._id}`)}>
              Edit
            </button>
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
