import React, { useEffect } from "react";
import { authStore } from "../stores/authStore";
import { Navigate } from "react-router-dom";

export const RequireAuth = (props) => {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (store.loggedIn === null) {
    return <h1>Loading</h1>;
  }

  if (store.loggedIn === false) {
    return <Navigate to="/login" />;
  }

  return <div>{props.children}</div>;
};
