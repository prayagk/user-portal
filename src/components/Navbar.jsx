import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { URLS } from "../constants";

function Navbar() {
  const navigate = useNavigate();
  const url = useLocation();
  const logout = () => {
    // TODO - logout
    localStorage.removeItem("currentSession");
    navigate(URLS.login);
  };

  const isLogoutShown =
    url.pathname !== URLS.login && url.pathname !== URLS.signup;

  return <nav>{isLogoutShown && <Button onClick={logout}>Logout</Button>}</nav>;
}

export default Navbar;
