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
    <form class="text-center w-75 m-auto">
      <div class="d-flex justify-start flex-wrap align-start">
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
          />
        </div>

        <div class="w-100 d-flex justify-start mt-3">
          <div
            class="h-100 bg-light-primary d-flex justify-center align-center"
            style="height: 35px; width: 35px"
          >
            <i class="fa-solid fa-lock text-white"></i>
          </div>
          <Input
            class="w-100 rounded-0 my-input text-white ps-2"
            placeholder="Password"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
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
