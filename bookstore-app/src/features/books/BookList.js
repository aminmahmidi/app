import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  justify-content: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    flex: 1 1 25%;
    max-width: 18%;
    padding: 10px;
    height: 330px;
    margin: 5px;
    list-style: none;
    border-radius: 12px;
    background-color: var(--secondary-color);
    opacity: 0.7;
    position: relative;
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
