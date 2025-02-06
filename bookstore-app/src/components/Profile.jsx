import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {user ? (
        <div>
          <h2>Hello, {user.username}!</h2>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
