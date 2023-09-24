import { mount } from "@vue/test-utils";
import Navbar from "../Navbar.vue";

describe("Navbar", () => {
  test("Renders username if exists", () => {
    const navbarComponent = mount(Navbar, {
      props: {
        username: "objectexamplecom",
      },
    });

    const userNameText = navbarComponent.find("[data-test-username-render]");

    expect(userNameText.text()).toBe("objectexamplecom");
  });

  test("Checking input value on change", () => {
    const navbarComponent = mount(Navbar, {
      props: {
        username: "objectexamplecom",
      },
    });

    const searchInput = navbarComponent.find(
      "[data-test-onchange-input-value]"
    );

    searchInput.setValue("harry");

    expect(navbarComponent.vm.inputValue).toBe("harry");
  });

  test("Checking site is not refreshing while submitting form", () => {
    const navbarComponent = mount(Navbar, {
      props: {
        username: "objectexamplecom",
      },
    });

    navbarComponent.setData({ inputValue: "harry" });
    const submitFormElement = navbarComponent.find(
      "[data-test-submit-not-refreshing-site]"
    );
    submitFormElement.trigger("submit.prevent");
    expect(navbarComponent.html()).not.toContain(
      "Saytning yangilanmagan qismi"
    );
  });

  test("Checking emit is worknig", () => {
    const navbarComponent = mount(Navbar, {
      props: {
        username: "objectexamplecom",
      },
    });

    navbarComponent.setData({ inputValue: "harry" });
    const submitFormElement = navbarComponent.find(
      "[data-test-submit-not-refreshing-site]"
    );
    submitFormElement.trigger("submit.prevent");

    navbarComponent.vm.$nextTick(() => {
      navbarComponent.vm.searchHandler();
      expect(navbarComponent.emitted("searchBookHandler")).toBeTruthy();
      done();
    });
  });

  test("Checking searchHandller worknig on click", () => {
    const navbarComponent = mount(Navbar, {
      props: {
        username: "objectexamplecom",
      },
    });

    navbarComponent.setData({ inputValue: "harry" });
    const submitFormElement = navbarComponent.find(
      "[data-test-submit-not-refreshing-site]"
    );
    submitFormElement.trigger("submit.prevent");

    const submitBtnElement = navbarComponent.find(
      "[data-test-searchhandler-button-working]"
    );

    expect(submitBtnElement.trigger("click")).toBeTruthy();
  });

  test("Checking logOut worknig on click", () => {
    const navbarComponent = mount(Navbar, {
      props: {
        username: "objectexamplecom",
      },
    });

    navbarComponent.setData({ inputValue: "harry" });
    const submitFormElement = navbarComponent.find(
      "[data-test-submit-not-refreshing-site]"
    );
    submitFormElement.trigger("submit.prevent");

    const submitBtnElement = navbarComponent.find(
      "[data-test-logout-button-working]"
    );

    expect(submitBtnElement.trigger("click")).toBeTruthy();
  });
});
