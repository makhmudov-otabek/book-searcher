<template>
  <h1>This is home !</h1>
</template>
<script>
export default {
  name: "Home",

  mounted() {
    this.$store.dispatch("getBooks", "programming");
  },
};
</script>
<style></style>
