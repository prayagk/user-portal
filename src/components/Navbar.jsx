import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { URLS } from "../constants";

function Navbar() {
  const navigate = useNavigate();
  const url = useLocation();
  const logout = () => {
    localStorage.removeItem("currentSession");
    navigate(URLS.login);
  };

  const isLogoutShown =
    url.pathname !== URLS.login && url.pathname !== URLS.signup;

  return (
    isLogoutShown && (
      <nav>
        <AppBar position="static">
          <Toolbar>
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              onClick={logout}
              disableElevation
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </nav>
    )
  );
}

export default Navbar;
