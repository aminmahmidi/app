import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <NavLink style={{ margin: "10px", fontSize: "25px" }} to={"/register"}>
        register
      </NavLink>
      <NavLink style={{ margin: "10px", fontSize: "25px" }} to={"/"}>
        login
      </NavLink>
      <h1>Welcome to Bookie</h1>
      <Outlet />
    </div>
  );
};

export default Account;
