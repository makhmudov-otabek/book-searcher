import { getterTypes } from "./types";

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
    console.log("log in start");
  },
  logInSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedIn = true;
    console.log("log in success");
  },
};

const actions = {
  logIn(context, payload) {
    context.commit("logInStart");
    setTimeout(() => {
      context.commit("logInSuccess", payload);
    }, 3000);
  },
};

export default { state, getters, mutations, actions };
