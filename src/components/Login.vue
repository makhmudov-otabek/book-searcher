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
        :isCyrillicPattern="isCyrillicPattern"
        :isSpeacialCharacters="isSpeacialCharacters"
        :isNumber="isNumber"
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
      password: "",
      isCyrillicPattern: false,
      isNumber: false,
      isSpeacialCharacters: false,
    };
  },

  methods: {
    submitHandler() {
      console.log("SUBMIT");
    },
    inputContainsFalsyValue(valueInput) {
      const cyrillicPattern = /[\u0400-\u04FF]/;
      const latinPattern = /[a-zA-Z]/;
      const numbers = /\d/;
      const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~';']/;

      const value = valueInput;

      this.isCyrillicPattern =
        cyrillicPattern.test(value) ||
        (latinPattern.test(value) && cyrillicPattern.test(value));
      this.isNumber = numbers.test(value);
      this.isSpeacialCharacters = specialCharacters.test(value);
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
</style>
