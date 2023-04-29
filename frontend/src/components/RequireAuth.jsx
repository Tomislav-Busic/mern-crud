import React, { useEffect } from "react";
import { authStore } from "../stores/authStore";

export const RequireAuth = (props) => {
  const store = authStore();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  if (!store.loggedIn) {
    return <h1>Please login</h1>;
  }

  return <div>{props.children}</div>;
};
