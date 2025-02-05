import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateBook, fetchBooks } from "./BookSlice";

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books, status, error } = useSelector((state) => state.books);
  const book = books.find((book) => book._id === id);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (!book) {
      dispatch(fetchBooks());
    } else {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(
      updateBook({ id, bookData: { title, author } })
    );
    if (updateBook.fulfilled.match(resultAction)) {
      navigate("/books");
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Book</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Updating..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default EditBook;
