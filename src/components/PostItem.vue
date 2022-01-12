<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.description }}</div>
    </div>
    <div class="post-btns">
      <my-button>Delete</my-button>
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
  padding: 15px;
  border: 2px solid green;
}
</style>
