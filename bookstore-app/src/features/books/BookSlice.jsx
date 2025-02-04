import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "http://localhost:3020/api-docs/#/Books/get_api_books"; 

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(`${API_URL}/api/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.post(`${API_URL}/books`, bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, bookData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.put(`${API_URL}/books/${id}`, bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      await axios.delete(`${API_URL}/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(
          (book) => book._id === action.payload._id
        );
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book._id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
