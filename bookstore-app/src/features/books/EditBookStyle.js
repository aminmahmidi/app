import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: 50px auto;
  align-items: center;
  animation: popout 0.3s alternate;
  background-color: var(--secondary-color);
  border-radius: 22px;
  @keyframes popout {
    0% {
      scale: 0.9;
    }
    100% {
      scale: 1;
    }
  }
  .form-container {
    padding: 30px;
    width: 500px;
  }
  .thumb-container{
    width: 400px;
    background-color: var(--border);
    margin:0px 15px;
    border-radius: 15px;
    height:52vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumb-icon{
   font-size: 70px;
   color: var(--text-color);
   opacity: 0.6;
  }
  h2 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  a {
    color: var(--btn-color);
  }
  input {
    font-size: 1rem;
    width: 100%;
    padding: 15px 10px;
    color: var(--text-color);
    outline: transparent;
    border: none;
    background-color: transparent;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--input-color) inset;
    box-shadow: 0 0 0px 1000px var(--input-color) inset;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: var(--text-color);
    color: var(--text-color);
  }
  .input-wrapper {
    border: 2px solid var(--input-color);
    padding: 0 10px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    background-color: var(--input-color);
    color: var(--text-color);
    transition: 0.3s;
    svg {
      font-size: 22px;
      color: var(--text-color);
      opacity: 0.8;
    }
  }
  .input-wrapper:focus-within {
    border: 2px solid var(--btn-color);
  }
  label {
    font-size: 1rem;
    opacity: 0.7;
    display: block;
    margin: 10px 0 5px 0;
  }
  button {
    display: block;
    border: none;
    padding: 15px 10px;
    font-size: 18px;
    width: 100%;
    border-radius: 17px;
    margin-top: 20px;
    background-color: var(--btn-color);
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    opacity: 0.8;
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
  h3 {
    font-weight: lighter;
  }
`;
