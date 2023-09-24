import { mount } from "@vue/test-utils";
import Books from "../Books.vue";
import { expect } from "vitest";

describe("Home", () => {
  test("renders 'Loading...' when isloading books true", () => {
    const booksComponent = mount(Books, {
      props: {
        isLoadingBooks: true,
        errorMessagesBooks: [],
        books: [],
      },
    });

    const loadingText = booksComponent.find("[data-isLoading-books-text]");

    expect(loadingText.exists()).toBe(true);
  });

  test("renders 'Server bilan ulanishda muammo bor !' when errorMessagesBooks books is not null", () => {
    const booksComponent = mount(Books, {
      props: {
        isLoadingBooks: false,
        errorMessagesBooks: [],
        books: [],
      },
    });

    const errorText = booksComponent.find("[data-errors-messages-books]");
    expect(errorText.exists()).toBe(true);
  });

  test("searched books or book undefined", () => {
    const booksComponent = mount(Books, {
      props: {
        isLoadingBooks: false,
        errorMessagesBooks: undefined,
        books: undefined,
      },
    });

    const undefinedText = booksComponent.find(
      "[data-searched-book-undefined-text]"
    );
    expect(undefinedText.exists()).toBe(true);
  });

  test("Are books rendering if books exists", () => {
    const booksComponent = mount(Books, {
      props: {
        isLoadingBooks: false,
        errorMessagesBooks: undefined,
        books: [
          {
            id: 1,
            volumeInfo: {
              title: "Book name",
              imageLinks: {
                smallThumbnail:
                  "http://books.google.com/books/content?id=jmpYAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              },
              authors: ["Jim Melton", "Stephen Buxton"],
            },
          },
        ],
      },
    });

    const booksContainer = booksComponent.find(
      "[data-books-container-rendering]"
    );

    expect(booksContainer.exists()).toBe(true);
  });

  test("Checking book detail navigator is working", () => {
    const booksComponent = mount(Books, {
      props: {
        isLoadingBooks: false,
        errorMessagesBooks: undefined,
        books: [
          {
            id: 1,
            volumeInfo: {
              title: "Book name",
              imageLinks: {
                smallThumbnail:
                  "http://books.google.com/books/content?id=jmpYAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              },
              authors: ["Jim Melton", "Stephen Buxton"],
            },
          },
        ],
      },
    });

    const bookDetailNavigator = booksComponent.find(
      "[data-test-button-book-detail-navigator]"
    );

    expect(bookDetailNavigator.trigger("click")).toBeTruthy();
  });
});
