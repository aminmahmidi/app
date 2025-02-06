import styled from "styled-components";

export const Wrapper = styled.div`
  .header {
    border-bottom: 1.5px solid rgba(128, 128, 128, 0.696);
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
  }
  .logo-container h3 {
    padding: 0;
    margin: 0;
  }

  .drop-down-container {
    margin: 0 20px;
    position: relative;
    align-content: center;
    display: grid;
  }

  .drop-down-btn {
    border: none;
    background-color: var(--btn-color);
    color: white;
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
    background-color: #015ee0;
  }
  .arrow-icon {
    margin: 0 20px 0 0;
    display: flex;
    font-size: 20px;
    align-content: center;
    align-items: center;
    transition: 0.4s;
  }
  .arrow-icon-down {
    margin: 0 20px 0 0;
    font-size: 20px;
    display: flex;
    align-content: center;
    align-items: center;
    transform: rotateX(180deg);
    transition: 0.4s;
  }

  .drop-down {
    position: absolute;
    background-color: var(--background-color);
    border-radius: 10px;
    color: var(--text-color);
    margin: 50px 0 50px 0;
    padding: 5px 5px;
    width: 100%;
    box-shadow: 0px 0px 10px 0px rgba(40, 40, 40, 0.482);
    animation: dropdown 0.3s alternate;
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
    display: grid;
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
    /* border-bottom: 1px solid gray; */
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
