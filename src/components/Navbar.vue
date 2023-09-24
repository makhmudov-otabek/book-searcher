<template>
  <div class="py-1 px-4">
    <div class="d-flex justify-between align-center">
      <p data-test-username-render class="text-capitalize m-0">
        {{ username }}
      </p>

      <div class="outline-secondary rounded-1 w-50">
        <form
          data-test-submit-not-refreshing-site
          class="d-flex justify-between px-2"
          @submit.prevent
        >
          <input
            v-model="inputValue"
            class="border-none w-100 bg-transparent text-white"
            placeholder="Search books..."
            data-test-onchange-input-value
          />
          <button
            data-test-searchhandler-button-working
            @click="searchHandler"
            class="bg-transparent border-none cursor-pointer text-white"
            style="font-size: 18px"
            data-test="button"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div>
        <button
          data-test-logout-button-working
          @click="logOut"
          class="mt-0 cursor-pointer text-white bg-transparent border rounded-1"
          style="font-size: 18px; border-color: white"
        >
          <i class="fa-solid fa-person-walking-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      rquired: true,
    },
  },

  emits: ["searchBookHandler", "logOutHandler"],

  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    logOut() {
      this.$emit("logOutHandler");
    },
    searchHandler() {
      this.$emit("searchBookHandler", this.inputValue);
    },
  },
};
</script>
<style></style>
