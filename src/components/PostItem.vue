<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post-btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
      <my-button style="margin-top: 5px" @click="$emit('remove', post.id)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
  border: 2px solid green;
}
.post-btns {
  display: flex;
  flex-direction: column;
}
</style>
