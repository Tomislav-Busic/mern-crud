import { create } from "zustand";
import axios from "axios";

export const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
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

    /* const { loginForm } = authStore.getState();

    console.log(loginForm); */
  },
  login: async () => {
    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm);

    set({ loggedIn: true });

    set({
      loginForm: {
        email: "",
        password: "",
      },
    });

    console.log(res);
  },
  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
    }
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      signupForm: {
        ...state.signupForm,
        [name]: value,
      },
    }));

    /* const { signupForm } = authStore.getState();

    console.log(signupForm); */
  },
  signup: async () => {
    const { signupForm } = authStore.getState();

    const res = await axios.post("/signup", signupForm);

    set({ loggedIn: true });

    set({
      signupForm: {
        email: "",
        password: "",
      },
    });

    console.log(res);
  },
  logout: async () => {
    await axios.get("/logout");
    set({ loggedIn: false });

    set({
      signupForm: {
        email: "",
        password: "",
      },
    });

    set({
      loginForm: {
        email: "",
        password: "",
      },
    });
  },
}));
