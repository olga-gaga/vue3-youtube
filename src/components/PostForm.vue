<template>
  <form class="form" @submit.prevent>
    <my-input v-model="post.title" placeholder="Title" />
    <my-input v-model="post.description" placeholder="Description" />
    <my-button class="btn" style="align-self: flex-end; margin-top: 15px" @click="createPost">Create post</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        description: '',
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
        description: '',
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
