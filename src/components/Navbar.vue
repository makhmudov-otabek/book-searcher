<template>
  <div class="py-1" style="position: sticky; top: 0">
    <div class="d-flex justify-between align-center">
      <p class="text-capitalize m-0">
        {{ this.$store.state.loginInfo.user.username }}
      </p>

      <div class="outline-secondary rounded-1 w-50">
        <form class="d-flex justify-between" @submit.prevent>
          <Input class="border-0 w-100 bg-transparent px-2" />
          <button
            class="bg-transparent border-none cursor-pointer"
            style="font-size: 18px"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div>
        <button class="mt-0 cursor-pointer" style="font-size: 18px">
          <i class="fa-solid fa-person-walking-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
