import React from "react";
import { Wrapper } from "./ErrorPageStyle";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>Page Not found!!</p>
      <Link to={"/"}>Return Home</Link>
    </Wrapper>
  );
};

export default ErrorPage;
