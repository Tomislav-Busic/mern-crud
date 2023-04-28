import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <li style={{ listStyle: "none" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
