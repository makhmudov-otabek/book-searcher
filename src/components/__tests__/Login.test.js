import { mount } from "@vue/test-utils";
import Login from "../Login.vue";

describe("Home", () => {
  test("data-test-login-container", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: false,
        isNumber: false,
        isSpeacialCharacters: false,
        maximumCharactersReached: false,
      },
    });

    const text = loginComponent.find("[data-test-login-container]");

    expect(text.exists()).toBe(true);
  });

  test("Checking site is not refreshing while submitting form", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: false,
        isNumber: false,
        isSpeacialCharacters: false,
        maximumCharactersReached: false,
      },
    });

    const submitFormElement = loginComponent.find(
      "[data-test-login-form-refreshing-site]"
    );
    submitFormElement.trigger("submit.prevent");
    expect(loginComponent.html()).not.toContain("Saytning yangilanmagan qismi");
  });

  test("Checking input username is working", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: false,
        isNumber: false,
        isSpeacialCharacters: false,
        maximumCharactersReached: true,
      },
    });

    const inputUsername = loginComponent.find("[data-test-login-username]");

    inputUsername.setValue("objectexamplecom");

    expect(loginComponent.vm.username).toBe("objectexamplecom");
  });

  test("Checking text don't use cyrillic (Iltimos kirill alifbosidan foydalanmang !) if crylic pattern exists", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: true,
        isNumber: false,
        isSpeacialCharacters: false,
        maximumCharactersReached: false,
      },
    });

    const cyrillicText = loginComponent.find(
      "[data-test-cyrillic-pattern-exists-text]"
    );

    expect(cyrillicText.exists()).toBe(true);
  });

  test("Checking text don't use numbers (Iltimos raqamlardan foydalanmang !) if crylic pattern exists", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: false,
        isNumber: true,
        isSpeacialCharacters: false,
        maximumCharactersReached: false,
      },
    });

    const numberText = loginComponent.find("[data-test-number-exists-text]");

    expect(numberText.exists()).toBe(true);
  });

  test("Checking text don't use special characters (Iltimos begilardan foydalanmang !) if crylic pattern exists", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: false,
        isNumber: false,
        isSpeacialCharacters: true,
        maximumCharactersReached: false,
      },
    });

    const specialCharactersText = loginComponent.find(
      "[data-test-special-characters-exists-text]"
    );

    expect(specialCharactersText.exists()).toBe(true);
  });
  test("Checking Submit btn click", () => {
    const loginComponent = mount(Login, {
      props: {
        isLoading: false,
        isCyrillicPattern: false,
        isNumber: false,
        isSpeacialCharacters: false,
        maximumCharactersReached: true,
      },
    });

    const submitBtn = loginComponent.find("[data-test-submit-handler-button]");

    expect(submitBtn.trigger("click")).toBeTruthy();
  });
});
