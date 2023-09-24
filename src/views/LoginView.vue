<template>
  <div
    style="height: 100vh"
    class="container d-flex justify-center align-center"
  >
    <Login
      :isLoading="isLoading"
      v-model:username="username"
      @inputContainsFalsyValue="inputContainsFalsyValue"
      :isCyrillicPattern="isCyrillicPattern"
      :isNumber="isNumber"
      :isSpeacialCharacters="isSpeacialCharacters"
      :maximumCharactersReached="maximumCharactersReached"
      @submitHandler="submitHandler"
    />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import { mapState } from "vuex";

export default {
  components: { Login },
  data() {
    return {
      username: "",
      isCyrillicPattern: false,
      isNumber: false,
      isSpeacialCharacters: false,
      maximumCharactersReached: false,
    };
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.loginInfo.isLoading,
    }),
  },

  methods: {
    submitHandler(payload) {
      this.$store.dispatch("logIn", payload);
      setTimeout(() => {
        this.$router.push("/home/query");
      }, 3000);
    },

    inputContainsFalsyValue(valueInput) {
      const value = valueInput;
      const cyrillicPattern = /[\u0400-\u04FF]/;
      const latinPattern = /[a-zA-Z]/;
      const numbers = /\d/;
      const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~';']/;

      this.isCyrillicPattern =
        cyrillicPattern.test(value) ||
        (latinPattern.test(value) && cyrillicPattern.test(value));
      this.isNumber = numbers.test(value);
      this.isSpeacialCharacters = specialCharacters.test(value);

      if (value.length < 16) {
        this.maximumCharactersReached = false;
      } else {
        this.maximumCharactersReached = true;
      }
    },
  },

  mounted() {
    this.$store.dispatch("getUser");
    if (this.$store.state.loginInfo.user?.isLoggedIn) {
      this.$router.push("/home/:query");
    }
  },
};
</script>

<style scoped></style>
