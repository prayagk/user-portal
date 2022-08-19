import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { URLS } from "../constants";
import { getItem } from "./storageHelper";

function PrivateRoute() {
  const currentSession = getItem("currentSession");
  return currentSession?.isLoggedIn ? <Outlet /> : <Navigate to={URLS.login} />;
}

export default PrivateRoute;
