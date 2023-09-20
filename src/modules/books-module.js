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
    return new Promise(() => {
      context.commit("getBooksStarted");
      BooksService.getBooks(query)
        .then((payload) => {
          console.log(payload);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};

export default { state, mutations, actions };
