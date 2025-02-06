import styled from "styled-components";

export const Wrapper = styled.div`
  .header {
    border-bottom: 1.5px solid var(--input-color);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container {
    background-color: var(--secondary-color);
    color: var(--text-color);
    padding: 12px 15px;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 50px;
    margin: 0 10px 0 0;
  }

  .drop-down-container {
    position: relative;
    align-content: center;
  }

  .drop-down-btn {
    border: none;
    background-color: var(--second-btn);
    border: 2px solid var(--border);
    font-size: 18px;
    border-radius: 7px;
    padding: 7px 17px;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s;
  }
  .drop-down-btn:hover {
    background-color: var(--second-btn);
  }
  .drop-down {
    position: absolute;
    background-color: var(--background-color);
    border-radius: 10px;
    color: var(--text-color);
    margin: 50px 0 50px 0;
    border: 2px solid red;
    left: 0;
    padding: 5px 5px;
    box-shadow: 0px 0px 10px 0px rgba(40, 40, 40, 0.482);
    animation: dropdown 0.3s alternate;
    overflow: hidden;
    display: flex;
  }
  @keyframes dropdown {
    0% {
      margin: 30px 0 50px 0;
    }
    100% {
      margin: 50px 0 50px 0;
    }
  }
  .show-drop-down {
    display: flex;
    /* width: 400px; */
left: -400%;
  }
  .hide-drop-down {
    display: none;
  }
  .radio-icon {
    display: flex;
    align-items: center;
    padding: 5px 5px;
    width: 100%;
    border-radius: 7px;
    transition: 0.3s;
  }
  .input-container input:checked + .radio-icon svg {
    background-color: var(--secondary-color);
    /* transition: 0.2s; */
  }
  .input-container input:checked + .radio-icon {
    background-color: rgba(104, 104, 104, 0.162);
    border-radius: 8px;
    transition: 0.3s;
  }
  .radio-icon svg {
    width: 2rem;
    height: 2rem;
    padding: 5px;
    border-radius: 5px;
    margin: 0 0 0 10px;
  }
  label {
    margin: 2px 0;
    display: flex;
    align-items: center;
    align-content: center;
    cursor: pointer;
  }
  label svg {
    margin: 0 10px;
    font-size: 18px;
  }
`;
