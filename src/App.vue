<template>
  <div class="app">
    <h1>Posts</h1>
    <my-input v-model="searchQuery" placeholder="Search" />
    <div class="app-btns">
      <my-button @click="showDialog">Create post</my-button> <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible"><post-form @create="createPost" /></my-dialog>
    <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
    <div v-else>Loading...</div>
    <div ref="observer" class="observer"></div>
    <!-- <div class="page-wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{ 'current-page': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';
import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      isPostsLoading: true,
      selectedSort: '',
      searchQuery: '',
      page: 0,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'Title' },
        { value: 'body', name: 'Description' },
      ],
      posts: [],
    };
  },
  methods: {
    createPost(newPost) {
      this.posts.unshift(newPost);
      this.dialogVisible = false;
    },
    removePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    async loadMorePosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
        this.isPostsLoading = false;
      } catch (error) {
        alert(error);
      }
    },
    // changePage(selectedPage) {
    //   this.page = selectedPage;
    // },
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = ([entry]) => {
      if (entry.isIntersecting && this.page < this.limit) {
        this.page += 1;
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      if (!this.selectedSort) {
        return [...this.posts];
      }
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort].localeCompare(post2[this.selectedSort]));
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(({ title }) => title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  watch: {
    page() {
      this.loadMorePosts();
    },
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => post1[newValue].localeCompare(post2[newValue]));
    // },
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
.app-btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page-wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background-color: green;
}
</style>
