
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Book, PencilSimple, Trash } from "@phosphor-icons/react";
const AccountIcon = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [dispatch]);

  return <div>AccountIcon</div>;
};

export default AccountIcon;
