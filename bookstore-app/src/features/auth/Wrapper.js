import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  .form-container {
    background-color: rgba(216, 216, 216, 0.35);
    border-radius: 22px;
    padding: 20px;
    width: 400px;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  input {
    font-size: 1rem;
    padding: 15px 10px;
    border-radius: 13px;
    outline: transparent;
    border: none;
    background-color: transparent;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
}

  .input-wrapper {
    border: 2px solid #006bff;
    padding: 0 10px;
    background-color: white;
    border-radius: 13px;
    display: flex;
    align-items: center;
    svg {
      font-size: 22px;
      color: gray;
    }
  }
  label {
    font-size: 1rem;
    opacity: 0.7;
    display: block;
    margin-top: 16px;
  }
  button {
    display: block;
    border: none;
    padding: 15px 10px;
    font-size: 18px;
    width: 100%;
    border-radius: 17px;
    margin-top: 20px;
    background-color: #006bff;
    color: white;
    cursor: pointer;
  }
  .error {
    display: flex;
    align-items: center;
    background-color: rgba(245, 0, 78, 0.23);
    color: #f5004f;
    padding: 10px;
    border-radius: 20px;
    p {
      margin: 0 10px;
    }
  }
  h3{
    font-weight: lighter;
  }
`;


