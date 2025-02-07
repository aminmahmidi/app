import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, deleteBook } from "./BookSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { Book, PencilSimple, Trash, Plus } from "@phosphor-icons/react";
import { Wrapper } from "../books/BookListStyle";
import BookLoader from "./BookLoader";
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
    return <BookLoader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Wrapper>
      <div className="bookList-header">
        <div>
          <h2>Books</h2>
        </div>

        <div>
          <button onClick={() => navigate("/books/add")}>
            <Plus weight="bold" /> Add Book
          </button>
        </div>
      </div>
      {books.map((e) => {
        console.log(e.title);
      })}
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <div className="thumb">
              <Book className="thumb-icon" weight="light" />
            </div>
            {book.title} <span className="author"> by {book.author} </span>
            <div className="tasks-container">
              <button
                className="task-btn"
                onClick={() => navigate(`/books/edit/${book._id}`)}
              >
                <PencilSimple className="task-icon" weight={"light"} />
                <span> Edit</span>
              </button>
              <button
                className="task-btn"
                onClick={() => handleDelete(book._id)}
              >
                <Trash className="task-icon" weight={"light"} /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default BookList;
