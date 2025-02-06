import React from "react";
import { Wrapper } from "./BookListStyle";
const BookLoader = () => {
  return (
    <Wrapper>
      <ul>
        <li className="li-loader">
          <span className="author"> </span>
          <div className="tasks-container">
          </div>
        </li>
        <li className="li-loader">
          <span className="author"> </span>
          <div className="tasks-container">
          </div>
        </li>
        <li className="li-loader">
          <span className="author"> </span>
          <div className="tasks-container">
          </div>
        </li>
        <li className="li-loader">
          <span className="author"> </span>
          <div className="tasks-container">
          </div>
        </li>
        <li className="li-loader">
          <span className="author"> </span>
          <div className="tasks-container">
          </div>
        </li>
      </ul>
      
    </Wrapper>
  );
};

export default BookLoader;
