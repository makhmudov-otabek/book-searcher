<template>
  <div
    style="
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(15px);
      position: sticky;
      top: 0;
      z-index: 99;
    "
    class="text-white"
  >
    <div class="container">
      <Navbar
        :username="username"
        @searchBookHandler="searchBookHandler"
        @logOutHandler="logOutHandler"
      />
    </div>
  </div>

  <div>
    <div class="container">
      <Books
        @navigateBookHandler="navigateBookHandler"
        :isLoadingBooks="isLoadingBooks"
        :errorMessagesBooks="errorMessagesBooks"
        :books="books"
      />
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Books from "./Books.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { Navbar, Books },

  computed: {
    ...mapState({
      books: (state) => state.booksModule.books,
      isLoadingBooks: (state) => state.booksModule.isLoading,
      errorMessagesBooks: (state) => state.booksModule.errors,
      username: (state) => state.loginInfo.user.username,
    }),
  },

  mounted() {
    this.$store.dispatch("getBooks", this.$route.params.query);
  },

  methods: {
    navigateBookHandler(id) {
      this.$router.push(`/home/${this.$route.params.query}/book-detail/${id}`);
    },
    logOutHandler() {
      this.$store.dispatch("logOut");
      this.$router.push("/");
    },

    searchBookHandler(inputValue) {
      const newQuery =
        inputValue.trim().length > 0 ? inputValue.trim() : "query";

      this.$store.dispatch("getBooks", newQuery);
      this.$router.push(`/home/${newQuery}`);
    },
  },
};
</script>
<style></style>
