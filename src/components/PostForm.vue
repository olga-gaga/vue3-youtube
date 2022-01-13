<template>
  <form class="form" @submit.prevent>
    <h3>Create post</h3>
    <my-input v-model="post.title" placeholder="Title" />
    <my-input v-model="post.body" placeholder="Description" />
    <my-button class="btn" style="align-self: flex-end; margin-top: 15px" @click="createPost">Create post</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        ...this.post,
      };
      this.$emit('create', newPost);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
