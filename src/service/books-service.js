import axios from "./axios";

const BooksService = {
  getBooks(query) {
    return axios.get(`/v1/volumes`, {
      params: {
        q: query,
        key: "AIzaSyBFeGsSWeAzRUFCl-P1r3_QJLjoxdfNKEM",
      },
    });
  },
};

export default BooksService;
