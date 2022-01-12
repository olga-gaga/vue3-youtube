<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Title 1', description: 'Description 1' },
        { id: 2, title: 'Title 2', description: 'Description 2' },
        { id: 3, title: 'Title 3', description: 'Description 3' },
        { id: 4, title: 'Title 4', description: 'Description 4' },
        { id: 5, title: 'Title 5', description: 'Description 5' },
      ],
    };
  },
  methods: {
    createPost(newPost) {
      this.posts.unshift(newPost);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
