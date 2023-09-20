<template>
  <div class="py-1 px-4">
    <div class="d-flex justify-between align-center">
      <p class="text-capitalize m-0">
        {{ this.$store.state.loginInfo.user.username }}
      </p>

      <div class="outline-secondary rounded-1 w-50">
        <form class="d-flex justify-between px-2" @submit.prevent>
          <input
            v-model="inputValue"
            class="border-none w-100 bg-transparent text-white"
            placeholder="Search books..."
          />
          <button
            @click="searchHandler"
            class="bg-transparent border-none cursor-pointer text-white"
            style="font-size: 18px"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div>
        <button
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
  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push("/");
    },
    searchHandler() {
      const newQuery =
        this.inputValue.trim().length > 0 ? this.inputValue.trim() : "harry";

      this.$store.dispatch("getBooks", newQuery);
      this.$router.push(`/home/${newQuery}`);
      this.inputValue = "";
    },
  },
};
</script>
<style></style>
