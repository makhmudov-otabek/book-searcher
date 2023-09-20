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
import { getItem } from "./helpers/persistanseStorage";

export default {
  mounted() {
    this.$store.dispatch("getUser");
  },
};
</script>

<style scoped></style>
