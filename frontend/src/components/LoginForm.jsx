import React from "react";
import { authStore } from "../stores/authStore";

export const LoginForm = () => {
  const store = authStore();

  return (
    <form onSubmit={store.login}>
      <input
        type="email"
        name="email"
        value={store.loginForm.email}
        onChange={store.updateLoginForm}
      />
      <input
        type="password"
        name="password"
        value={store.loginForm.password}
        onChange={store.updateLoginForm}
      />
      <button type="submit">Login</button>
    </form>
  );
};
