<template>
  <div data-test-login-container class="form-container w-50 m-auto px-5 py-5">
    <div class="d-flex justify-center mb-5">
      <div
        class="rounded-circle user-box d-flex justify-center align-center"
        style="font-size: 32px; color: white"
      >
        <i class="fa-regular fa-user"></i>
      </div>
    </div>
    <form
      data-test-login-form-refreshing-site
      class="text-center w-75 m-auto"
      @submit.prevent
    >
      <div class="w-100 d-flex justify-center">
        <div
          class="h-100 bg-light-primary d-flex justify-center align-center"
          style="height: 35px; width: 35px"
        >
          <i class="fa-solid fa-user text-white"></i>
        </div>
        <input
          data-test-login-username
          class="w-100 rounded-0 my-input text-white ps-2"
          placeholder="Username"
          @input="updateInputHandler"
          v-model="username"
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
          data-test-cyrillic-pattern-exists-text
          v-if="isCyrillicPattern"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos kirill alifbosidan foydalanmang !
        </p>
        <p
          data-test-number-exists-text
          v-if="isNumber"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos raqamlardan foydalanmang !
        </p>
        <p
          data-test-special-characters-exists-text
          v-if="isSpeacialCharacters"
          class="py-2"
          style="color: rgb(247, 255, 0); background-color: #106e5d96"
        >
          Iltimos begilardan foydalanmang !
        </p>
      </div>

      <button
        data-test-submit-handler-button
        @click="submitHandlerButton"
        :disabled="
          isCyrillicPattern ||
          isNumber ||
          isSpeacialCharacters ||
          !maximumCharactersReached
        "
        class="w-100 py-1 mt-3 rounded-0 text-white submit-btn"
        style="border: none"
        :class="{
          'submit-btn-hover':
            !isCyrillicPattern &&
            !isNumber &&
            !isSpeacialCharacters &&
            maximumCharactersReached,
          'submit-btn-disabled':
            isCyrillicPattern ||
            isNumber ||
            isSpeacialCharacters ||
            !maximumCharactersReached,
          loader: isLoading,
        }"
      >
        SUBMIT
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  props: {
    isLoading: {
      type: Boolean,
    },
    isCyrillicPattern: {
      type: Boolean,
    },
    isNumber: {
      type: Boolean,
    },
    isSpeacialCharacters: {
      type: Boolean,
    },
    maximumCharactersReached: {
      type: Boolean,
    },
  },

  emits: ["inputContainsFalsyValue", "submitHandler"],

  methods: {
    submitHandlerButton() {
      const payload = {
        username: this.username,
        isLoggedIn: true,
      };

      this.$emit("submitHandler", payload);
    },

    updateInputHandler(e) {
      this.$emit("inputContainsFalsyValue", e.target.value);
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

.my-input:focus {
  outline: none;
}

.loader {
  animation-name: close-button;
  animation-iteration-count: infinite;
  animation-duration: 1s;
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

.submit-btn {
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.3s;
  background: #106f5e;
}

.submit-btn-disabled {
  background: #0b4f43;
  cursor: not-allowed;
}

.submit-btn-hover:hover {
  background-color: #16937c;
}
</style>
