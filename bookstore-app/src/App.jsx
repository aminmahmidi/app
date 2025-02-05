import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import BookList from "./features/books/BookList";
import AddBook from "./features/books/AddBook";
import EditBook from "./features/books/EditBook";
import PrivateRoute from "./components/PrivateRoute";

// Create the router configuration
const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/books",
    element: (
      <PrivateRoute>
        <BookList />
      </PrivateRoute>
    ),
  },
  {
    path: "/books/add",
    element: (
      <PrivateRoute>
        <AddBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/books/edit/:id",
    element: (
      <PrivateRoute>
        <EditBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <BookList />
      </PrivateRoute>
    ), // Redirect to books by default
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
