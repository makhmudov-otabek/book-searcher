<template>
  <div class="p-2 my-5 d-flex justify-between flex-wrap" style="gap: 20px">
    <div
      class="book-card col-3-6 p-2 border rounded-1 text-white px-3"
      v-for="book in books"
    >
      <div class="w-100 mt-3 d-flex justify-center">
        <img
          style="
            width: 160px;
            height: 200px;
            background-color: rgb(236, 236, 236);
            object-fit: cover;
            overflow: hidden;
          "
          class="rounded-1"
          :src="book.volumeInfo.imageLinks.smallThumbnail"
          alt="Book image"
        />
      </div>

      <p class="mt-5">Title : {{ book.volumeInfo.title }}</p>
      <p>
        Authors :
        <span v-for="author in book.volumeInfo.authors">{{ author }}, </span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      books: (state) => state.booksModule.books,
    }),
  },

  methods: {},
};
</script>
<style>
.book-card {
  border-color: #a7a6a6;
  background-color: #000625;
  transition: 0.3s;
}

.book-card:hover {
  border-color: #fff;
  transform: scale(1.1);
}
</style>
