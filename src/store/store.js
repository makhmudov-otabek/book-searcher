import { createStore } from "vuex";
import loginInfo from "../modules/login-info";
import booksModule from "../modules/books-module";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { loginInfo, booksModule },
});

export default store;
