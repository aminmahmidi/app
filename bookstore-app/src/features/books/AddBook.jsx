import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./addBookStyle";
import { Book, PencilSimple, Trash, Plus } from "@phosphor-icons/react";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.books);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(
      addBook({ title, author, publishDate })
    );
    if (addBook.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        {error && <p>{error.message}</p>}
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <div className="input-wrapper">
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="Author">Author</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="Author"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="date">publish date</label>
            <div className="input-wrapper">
              <input
                id="date"
                type="date"
                placeholder="publish date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Adding..." : "Add Book"}
          </button>
        </form>
      </div>
      <div className="thumb-container">
        <div className="Thumb">
          <Book className="thumb-icon" weight="light" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AddBook;
