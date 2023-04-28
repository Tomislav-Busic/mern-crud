import React from "react";

export const LoginForm = () => {
  return (
    <form>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
