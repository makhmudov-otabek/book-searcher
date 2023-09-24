import { mount } from "@vue/test-utils";
import BookDetail from "../BookDetail.vue";

describe("BookDetail", () => {
  test("Testing is loading text", () => {
    const bookDetailComponent = mount(BookDetail, {
      props: {
        isLoading: true,
        error: undefined,
        book: {
          id: 1,
          volumeInfo: {
            title: "Book name",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=jmpYAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            },
            authors: ["Jim Melton", "Stephen Buxton"],
            description: "Description here",
          },
        },
      },
    });

    const isLoadingTextElement = bookDetailComponent.find(
      "[data-test-isloading-message]"
    );

    expect(isLoadingTextElement.exists()).toBe(true);
  });

  test("Testing error message", () => {
    const bookDetailComponent = mount(BookDetail, {
      props: {
        isLoading: false,
        error: "Sorry, the book was not found !",
        book: undefined,
      },
    });

    const isErrorTextElement = bookDetailComponent.find(
      "[data-test-error-message]"
    );

    expect(isErrorTextElement.exists()).toBe(true);
  });

  test("Testing comma message", () => {
    const bookDetailComponent = mount(BookDetail, {
      props: {
        isLoading: false,
        error: undefined,
        book: {
          id: 1,
          volumeInfo: {
            title: "Book name",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=jmpYAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            },
            authors: ["James Cameron", "Megan Fox", "Merling Barbarossa"],
            description: "Description here",
          },
        },
      },
    });

    const commaText = bookDetailComponent.find("[data-testing-comma-text]");

    expect(commaText.exists()).toBe(true);
  });

  test("Testing author undefined (Author: N/A) message", () => {
    const bookDetailComponent = mount(BookDetail, {
      props: {
        isLoading: false,
        error: undefined,
        book: {
          id: 1,
          volumeInfo: {
            title: "Book name",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=jmpYAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            },
            authors: undefined,
            description: "Description here",
          },
        },
      },
    });

    const authorUndefinedText = bookDetailComponent.find(
      "data-test-authors-undefined-text]"
    );

    expect(authorUndefinedText.exists()).toBe(false);
  });
});
