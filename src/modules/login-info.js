import { getterTypes } from "./types";
import { getItem, removeItem, setItem } from "../helpers/persistanseStorage";

const state = {
  user: null,
  errors: null,
  isLoading: false,
  isLoggedIn: false,
};

const getters = {
  [getterTypes.currentUser]: (state) => state.user,
};

const mutations = {
  logInStart(state) {
    state.isLoading = true;
    state.errors = null;
    state.user = null;
    state.isLoggedIn = false;
  },
  logInSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedIn = true;
  },
};

const actions = {
  getUser(context) {
    const user = getItem("user");
    context.commit("logInSuccess", user);

    return user;
  },

  logIn(context, payload) {
    context.commit("logInStart");
    setTimeout(() => {
      context.commit("logInSuccess", payload);
      setItem("user", payload);
    }, 3000);
  },

  logOut() {
    removeItem("user");
  },
};

export default { state, getters, mutations, actions };
