import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./Wrapper";
import ButtonLoader from "../../components/ButtonLoader";
import { Envelope, Lock, WarningCircle } from "@phosphor-icons/react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/books");
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Login</h2>
        {error && (
          <span className="error">
            {" "}
            <WarningCircle /> <p>{error.message}</p>{" "}
          </span>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <Envelope />
              <input
                type="text"
                placeholder="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="password">Username</label>
            <div className="input-wrapper">
              <Lock />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? <ButtonLoader /> : "login"}
          </button>
        </form>
        <h3>
          Not registered yet? <Link to={"/register"}>register</Link>
        </h3>
      </div>
    </Wrapper>
  );
};

export default Login;
