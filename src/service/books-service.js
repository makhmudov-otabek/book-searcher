import axios from "./axios";

const BooksService = {
  getBooks(query) {
    return axios.get(`/v1/volumes`, {
      params: {
        q: query === "" ? "Harry" : query,
        key: "AIzaSyBFeGsSWeAzRUFCl-P1r3_QJLjoxdfNKEM",
        startIndex: 0,
        maxResults: 12,
      },
    });
  },
};

export default BooksService;
