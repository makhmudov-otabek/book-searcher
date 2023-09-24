<template>
  <h2
    data-isLoading-books-text
    v-if="isLoadingBooks"
    style="color: #ffba08"
    class="text-center"
  >
    Loading...
  </h2>

  <h2
    data-errors-messages-books
    v-else-if="errorMessagesBooks"
    style="color: #ffba08"
    class="text-center"
  >
    Server bilan ulanishda muammo bor !
  </h2>

  <div data-searched-book-undefined-text v-else-if="!books">
    <h2 style="color: #ffba08" class="text-center">
      Siz izlagan kitob topilmadi !
    </h2>
  </div>

  <div
    v-else
    data-books-container-rendering
    class="p-2 my-5 d-flex flex-wrap justify-start-responsive"
    style="gap: 20px"
  >
    <div
      data-test-book-rendering
      class="book-card col-3-6 p-2 border rounded-1 text-white px-3"
      v-for="book in books"
      :key="book.id"
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
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

      <div>
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
      </div>
      <button
        data-test-button-book-detail-navigator
        @click="
          () => {
            navigateBook(book.id);
          }
        "
        class="w-100 bg-transparent border rounded-1 text-white py-1"
        style="border-color: #a7a6a6"
      >
        READ
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isLoadingBooks: {
      type: Boolean,
      required: true,
    },
    errorMessagesBooks: {
      type: [Array, Object],
    },
    books: {
      type: [Array],
    },
  },

  emits: ["navigateBookHandler"],

  methods: {
    navigateBook(id) {
      this.$emit("navigateBookHandler", id);
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
