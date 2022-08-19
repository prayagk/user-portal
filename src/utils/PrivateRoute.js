import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getItem } from "./storageHelper";

function PrivateRoute() {
  const currentSession = getItem("currentSession");
  return currentSession?.isLoggedIn ? <Outlet /> : <Navigate to="/user-portal/login" />;
}

export default PrivateRoute;
