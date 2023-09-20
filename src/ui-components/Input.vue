<template>
  <input
    type="text"
    class="my-input"
    :value="modelValue"
    @input="updateInputHandler"
  />
</template>

<script>
export default {
  name: "Input",

  props: {
    modelValue: String,
    inputContainsFalsyValue: Function,
  },

  methods: {
    updateInputHandler(e) {
      this.$emit("update:modelValue", e.target.value);
      this.inputContainsFalsyValue(e.target.value);
    },
  },
};
</script>

<style scoped>
.my-input {
  border: none !important;
  height: 35px;
}

.my-input:focus {
  outline: none;
}
</style>
