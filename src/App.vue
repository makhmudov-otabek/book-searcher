<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink :to="{ name: 'home' }">Home</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import BookDetailView from "./views/BookDetailView.vue";

export default {
  components: { BookDetailView },
  mounted() {
    this.$store.dispatch("getUser");
    if (!this.$store.state.loginInfo.user?.isLoggedIn) {
      console.log("app vue");
      this.$router.push("/");
    }
  },
};
</script>

<style scoped></style>
