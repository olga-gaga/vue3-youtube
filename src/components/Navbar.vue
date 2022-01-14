<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar-btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About company</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px rgb(70, 25, 25);
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar-btns {
  margin-left: auto;
}
.navbar-btns > button {
  margin-left: 20px;
}
</style>
