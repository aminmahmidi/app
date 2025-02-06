import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./authSlice";
import { useNavigate, Link } from "react-router-dom";
import { Wrapper } from "./Wrapper";
import ButtonLoader from "../../components/ButtonLoader";
import { Envelope, Lock, WarningCircle } from "@phosphor-icons/react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(registerUser({ username, password }));
    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/books");
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Register</h2>
        {error && (
          <span className="error">
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="username">Password</label>

            <div className="input-wrapper">
              <Lock />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />{" "}
            </div>
          </div>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? <ButtonLoader /> : "Register"}
          </button>
        </form>
        <h3>
          Already have an account? <Link to={"/login"}>login</Link>
        </h3>
      </div>
    </Wrapper>
  );
};

export default Register;
