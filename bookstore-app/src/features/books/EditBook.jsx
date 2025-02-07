import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateBook, fetchBooks } from "./BookSlice";
import { Wrapper } from "./EditBookStyle";
import { Book, PencilSimple } from "@phosphor-icons/react";
import ButtonLoader from "../../components/ButtonLoader";
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
      navigate("/");
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <div>
        {error && <p>{error}</p>}
        <div className="form-container">
        <h2>
          <PencilSimple weight={"light"} /> Edit Book
        </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="author">Author</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Author"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? <ButtonLoader />  : "Update Book"}
            </button>
          </form>
        </div>
      </div>
      <div className="thumb-container">
        <div className="Thumb">
          <Book className="thumb-icon" weight="light" />
        </div>
      </div>
    </Wrapper>
  );
};

export default EditBook;
