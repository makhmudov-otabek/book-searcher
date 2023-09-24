import BooksService from "../service/books-service";

const state = {
  books: null,
  isLoading: false,
  errors: null,
};

const mutations = {
  getBooksStarted(state) {
    state.isLoading = true;
    state.books = null;
    state.errors = null;
  },
  getBooksSuccess(state, payload) {
    console.log(payload);
    state.isLoading = false;
    state.books = payload;
  },
  getBooksFailure(state, errors) {
    state.isLoading = false;
    state.errors = errors;
  },
};

const actions = {
  getBooks(context, query) {
    return new Promise((resolve, reject) => {
      context.commit("getBooksStarted");
      BooksService.getBooks(query)
        .then((payload) => {
          context.commit("getBooksSuccess", payload.data.items);
          resolve(payload.data.items);
        })
        .catch((errors) => {
          console.log(errors);
          context.commit("getBooksFailure", errors);
          reject(errors);
        });
    });
  },
};

export default { state, mutations, actions };
