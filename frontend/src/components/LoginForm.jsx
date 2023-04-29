import React from "react";
import { authStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    //Navigate
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin}>
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
