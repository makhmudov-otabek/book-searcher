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
      <Navbar />
    </div>
  </div>

  <div class="">
    <div class="container">
      <Books />
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import Books from "./Books.vue";
export default {
  name: "Home",
  components: { Navbar, Books },
  mounted() {
    this.$store.dispatch("getBooks", "programming");
  },
};
</script>
<style></style>
