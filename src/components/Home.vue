<template>
  <div class="bg-secondary">
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
