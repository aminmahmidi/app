import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  justify-content: center;
  .bookList-header {
    padding: 0 75px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .bookList-header button{
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    background-color: var(--btn-color);
    color: white;
    border-radius: 10px;
    border: none;
    transition: 0.3s;
    cursor: pointer;
  }
  .bookList-header button:hover{
    opacity: 0.8;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  li {
    flex: 1 1 25%;
    max-width: 18%;
    padding: 10px;
    height: 330px;
    margin: 10px 0;
    list-style: none;
    border-radius: 12px;
    background-color: var(--secondary-color);
    opacity: 0.7;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.3s;
    .thumb {
      display: flex;
      border-radius: 7px;
      height: 200px;
      align-items: center;
      justify-content: center;
      background-color: var(--secondary-color);
      border: 2px solid var(--border);
    }
    .thumb-icon {
      display: block;
      font-size: 70px;
      opacity: 0.3;
    }
  }

  .li-loader {
    flex: 1 1 25%;
    max-width: 18%;
    padding: 10px;
    height: 330px;
    margin: 10px;
    list-style: none;
    border-radius: 12px;
    background: linear-gradient(to left, var(--secondary-color), transparent);
    background-size: 200% 100%;

    animation: loader 0.5s infinite alternate;
    opacity: 0.7;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.3s;
  }

  @keyframes loader {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  li:hover {
    box-shadow: 0 10px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-top: -2px;
  }
  .author {
    display: block;
    opacity: 0.7;
    font-weight: lighter;
    font-size: 13px;
  }
  .tasks-container {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 10px 0;
  }
  button {
    flex: 1;
  }
  .task-btn {
    border: none;
    background-color: var(--second-btn);
    color: var(--text-color);
    border: 2px solid var(--border);
    border-radius: 7px;
    padding: 5px 8px;
    margin: 0 5px 0 0;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s;
  }
  .task-icon {
    margin: 0 10px 0 0;
  }
`;
