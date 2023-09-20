<template>
  <button
    :disabled="
      isCyrillicPattern ||
      isNumber ||
      isSpeacialCharacters ||
      !maximumCharactersReached
    "
    class="w-100 py-1 mt-2 bg-light-primary rounded-0 text-white submit-btn"
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
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    isCyrillicPattern: Boolean,
    isNumber: Boolean,
    isSpeacialCharacters: Boolean,
    maximumCharactersReached: Boolean,
  },
};
</script>

<style>
.submit-btn {
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn-disabled {
  background: #0b4f43;
  cursor: not-allowed;
}

.submit-btn-hover:hover {
  background-color: #16937c;
}
</style>
