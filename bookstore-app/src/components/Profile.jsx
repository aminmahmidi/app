import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { UserCircle } from "@phosphor-icons/react";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="profile">
      <button type="button" className="logout-btn" onClick={handleLogout}>
        logout
      </button>
      <UserCircle size={50} weight="light" />
    </div>
  );
};

export default Profile;
