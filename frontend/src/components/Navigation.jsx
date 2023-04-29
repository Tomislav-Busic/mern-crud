import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <li style={{ listStyle: "none" }}>
          <Link
            style={{
              fontSize: "2rem",
              textDecoration: "none",
              fontWeight: "700",
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link
            style={{
              fontSize: "2rem",
              textDecoration: "none",
              fontWeight: "700",
            }}
            to="/login"
          >
            Login
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link
            style={{
              fontSize: "2rem",
              textDecoration: "none",
              fontWeight: "700",
            }}
            to="/signup"
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};
