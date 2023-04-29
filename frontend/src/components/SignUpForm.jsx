import React from "react";
import { authStore } from "../stores/authStore";

export const SignupForm = () => {
  const store = authStore();

  const handleSignup = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        name="email"
        value={store.signupForm.email}
        onChange={store.updateSignupForm}
      />
      <input
        type="password"
        name="password"
        value={store.signupForm.password}
        onChange={store.updateSignupForm}
      />
      <button type="submit">Signup</button>
    </form>
  );
};
