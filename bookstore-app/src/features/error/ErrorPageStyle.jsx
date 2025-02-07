import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  margin: 150px auto 0 auto;
  text-align: center;
  p {
    font-size: 30px;
  }
  h1 {
    font-size: 150px;
    padding: 0;
    margin: 0;
  }
  a {
    width: 20%;
    text-align: center;
    background-color: var(--btn-color);
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }
  a:hover {
    opacity: 0.8;
  }
`;
