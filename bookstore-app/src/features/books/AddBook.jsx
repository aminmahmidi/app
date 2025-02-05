import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.books);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(addBook({ title, author,publishDate }));
    if (addBook.fulfilled.match(resultAction)) {
      navigate('/books');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      {error && <p>{error.message}</p>}
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
        <input
          type="date"
          placeholder="publish date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;