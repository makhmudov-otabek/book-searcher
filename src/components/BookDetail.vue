<template>
  <h2
    data-test-isloading-message
    v-if="isLoading"
    style="color: #ffba08"
    class="text-center"
  >
    Loading...
  </h2>

  <div
    data-test-error-message
    v-else-if="error"
    class="text-center"
    style="color: #ffba08"
  >
    <h2>{{ error }}</h2>
  </div>

  <div v-else class="container text-white py-5 my-5">
    <div class="d-flex align-end" style="gap: 20px">
      <img
        style="
          width: 160px;
          height: 200px;
          background-color: rgb(236, 236, 236);
          object-fit: cover;
          overflow: hidden;
        "
        class="rounded-1"
        :src="book?.volumeInfo?.imageLinks?.smallThumbnail"
        alt="Book image"
      />
      <div>
        <h2>{{ book?.volumeInfo?.title }}</h2>

        <p
          v-if="
            book?.volumeInfo?.authors && book?.volumeInfo?.authors?.length > 0
          "
        >
          <span>Authors : </span>
          <span
            v-for="(author, index) in book?.volumeInfo?.authors"
            :key="author"
          >
            {{ author }}
            <span
              data-testing-comma-text
              v-if="index < book?.volumeInfo?.authors?.length - 1"
              >,
            </span>
          </span>
        </p>
        <p data-test-authors-undefined-text v-else>Author: N/A</p>
      </div>
    </div>
    <p
      v-if="
        book?.volumeInfo?.authors && book?.volumeInfo?.description?.length > 0
      "
      style="font-size: 26px"
    >
      {{ book?.volumeInfo?.description }}
    </p>
    <p v-else>Description: N/A</p>
  </div>
</template>

<script>
export default {
  name: "BookDetail",

  props: {
    isLoading: {
      type: Boolean,
    },
    error: {
      type: String,
    },
    book: {
      type: Object,
    },
  },
};
</script>

<style></style>
