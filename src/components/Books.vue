<template>
  <h2
    v-if="this.$store.state.booksModule.isLoading"
    style="color: #ffba08"
    class="text-center"
  >
    Loading...
  </h2>

  <h2
    v-else-if="this.$store.state.booksModule.errors"
    style="color: #ffba08"
    class="text-center"
  >
    Server bilan ulanishda muammo bor !
  </h2>

  <div
    class="p-2 my-5 d-flex align-start flex-wrap justify-start-responsive"
    style="gap: 20px"
  >
    <div
      class="book-card col-3-6 p-2 border rounded-1 text-white px-3"
      v-for="book in books"
      :key="book.id"
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
          :src="book.volumeInfo.imageLinks?.smallThumbnail"
          alt="Book image"
        />
      </div>

      <p class="mt-5" style="line-height: 1.55">
        Title : {{ book.volumeInfo.title }}
      </p>
      <p style="line-height: 1.55">
        Authors :
        <span v-for="(author, index) in book.volumeInfo.authors" :key="author"
          >{{ author }}
          <template v-if="index < book?.volumeInfo?.authors?.length - 1"
            >,
          </template>
        </span>
      </p>
      <button
        @click="navigateBookHandler(book.id)"
        class="w-100 bg-transparent border rounded-1 text-white py-1"
        style="border-color: #a7a6a6"
      >
        READ
      </button>
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

  methods: {
    navigateBookHandler(id) {
      this.$router.push(`/home/${this.$route.params.query}/book-detail/${id}`);
    },
  },
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
.book-card:hover button {
  border-color: #fff;
}

.book-card button {
  transition: 0.3s;
  cursor: pointer;
}

.book-card button:hover {
  background-color: #ededed;
  color: #000;
}
</style>
