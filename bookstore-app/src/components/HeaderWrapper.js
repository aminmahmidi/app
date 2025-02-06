import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1.5px solid var(--input-color);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  .first {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .logo-container {
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
    display: grid;
  }
  .drop-down-btn {
    border: none;
    background-color: var(--second-btn);
    color: var(--text-color);
    border: 2px solid var(--border);
    font-size: 30px;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s;
  }
  .drop-down-btn:hover {
    background-color: var(--border);
  }
  .drop-down {
    background-color: var(--secondary-color);
    color: var(--text-color);
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    min-width: 200px;
    padding: 10px;
    overflow: hidden;
    border: none;
    z-index: 1000;
    border-radius: 20px;
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
    display: block;
  }
  .hide-drop-down {
    display: none;
  }
  .radio-icon {
    display: flex;
    align-items: center;
    padding: 5px 5px;
    margin: 0 10px 0 0;
    width: 100%;
    border-radius: 7px;
    transition: 0.3s;
  }
  .input-container input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    transition: 0.3s;
  }
  .input-container input:checked + .radio-icon svg {
    background-color: var(--secondary-color);
    margin: 0 10px 0 0;
    /* transition: 0.2s; */
  }
  .input-container input:checked + .radio-icon {
    background-color: rgba(129, 129, 129, 0.16);
    border-radius: 8px;
    transition: 0.3s;
  }
  .radio-icon svg {
    width: 2rem;
    height: 2rem;
    padding: 5px;
    border-radius: 5px;
    margin: 0 10px 0 0;
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
  .profile {
    display: flex;
    justify-items: center;
    align-items: center;
    padding-right: 10px;
  }
  .logout-btn {
    border: none;
    background-color: var(--second-btn);
    color: var(--text-color);
    border: 2px solid var(--border);
    padding: 7px 10px;
    margin: 10px;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s;
  }
  .footer {
    margin-top: 400px;
    text-align: center;
    align-content: center;
    display: flex;
    height: 100px;
  }
`;
