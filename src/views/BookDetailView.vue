<template>
  <BookDetail :isLoading="isLoading" :error="error" :book="book" />
</template>

<script>
import BookDetail from "../components/BookDetail.vue";
import { mapState } from "vuex";
export default {
  name: "BookDetailView",
  components: { BookDetail },

  data() {
    return {
      book: null,
      error: null,
    };
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.booksModule.isLoading,
    }),
  },

  mounted() {
    this.$store
      .dispatch("getBooks", this.$route.params.query)
      .then((books) => {
        const foundedBook = books.find(
          (item) => item.id === this.$route.params.id
        );

        this.book = foundedBook;
      })
      .catch((error) => {
        this.error = "Sorry, the book was not found !";
      });
  },
};
</script>

<style></style>
