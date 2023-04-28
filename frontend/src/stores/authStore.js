import { create } from "zustand";
import axios from "axios";

export const authStore = create((set) => ({
  loginForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;
  },
}));
