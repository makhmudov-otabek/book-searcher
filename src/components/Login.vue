<template>
  <div class="form-container w-50 m-auto px-5 py-5">
    <div class="d-flex justify-center mb-5">
      <div
        class="rounded-circle user-box d-flex justify-center align-center"
        style="font-size: 32px; color: white"
      >
        <i class="fa-regular fa-user"></i>
      </div>
    </div>
    <form class="text-center w-75 m-auto" @submit.prevent>
      <div class="w-100 d-flex justify-center">
        <div
          class="h-100 bg-light-primary d-flex justify-center align-center"
          style="height: 35px; width: 35px"
        >
          <i class="fa-solid fa-user text-white"></i>
        </div>
        <Input
          class="w-100 rounded-0 my-input text-white ps-2"
          placeholder="Username"
          v-model="username"
          :inputContainsFalsyValue="inputContainsFalsyValue"
        />
      </div>

      <div>
        <p
          v-if="!maximumCharactersReached"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos 16 ta belgi kiriting !
        </p>
        <p
          v-if="isCyrillicPattern"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos kirill alifbosidan foydalanmang !
        </p>
        <p
          v-if="isNumber"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos raqamlardan foydalanmang !
        </p>
        <p
          v-if="isSpeacialCharacters"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos begilardan foydalanmang !
        </p>
      </div>

      <Button
        :class="{ loader: isLoading }"
        :isCyrillicPattern="isCyrillicPattern"
        :isSpeacialCharacters="isSpeacialCharacters"
        :isNumber="isNumber"
        :maximumCharactersReached="maximumCharactersReached"
        @click="submitHandler"
        >SUBMIT</Button
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

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
    isLoading() {
      return this.$store.state.loginInfo.isLoading;
    },
  },

  methods: {
    submitHandler() {
      const payload = {
        username: this.username,
      };

      this.$store.dispatch("logIn", payload);
      setTimeout(() => {
        this.$router.push("/home/q=programming");
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
};
</script>

<style scoped>
.form-container {
  background-color: rgb(255 255 255 / 0.3);
  backdrop-filter: blur(10px);
  border-radius: 5px;
}

.user-box {
  width: 80px;
  height: 80px;
  background-color: #106e5d;
}

.my-input {
  border: none !important;
  height: 35px;
  background-color: #106e5d96;
}
@keyframes close-button {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.loader {
  animation-name: close-button;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}
</style>
