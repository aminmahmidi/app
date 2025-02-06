import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import BookList from "./features/books/bookList";
import AddBook from "./features/books/AddBook";
import EditBook from "./features/books/EditBook";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./features/books/Home";
import { fetchUser } from "./features/auth/authSlice";

const router = createBrowserRouter([
  {
    index: true,
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
