import React from "react";
import { authStore } from "../stores/authStore";

export const RequireAuth = (props) => {
  const state = authStore();
  if (!state.loggedIn) {
    return <h1>Please login</h1>;
  }
  return <div>{props.children}</div>;
};
