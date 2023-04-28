import { create } from "zustand";
import axios from "axios";

export const authStore = create((set) => ({
  loginForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      loginForm: {
        ...state.loginForm,
        [name]: value,
      },
    }));

    const { loginForm } = authStore.getState();

    console.log(loginForm);
  },
  login: (e) => {
    e.preventDefault();

    const { loginForm } = authStore.getState();

    axios.post("/login", loginForm, { withCredentials: true });
  },
}));
