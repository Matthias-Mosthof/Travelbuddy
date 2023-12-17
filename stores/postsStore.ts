export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    filter: '',
    categories: [],
    selectedCategories: [],
    pagination: {
      postsAmount: 0,
      firstPostIndex: 0,
      lastPostIndex: 9,
    },
  }),

  actions: {

    async fetchAllPosts() {
      const client = await useSupabaseClient<Database>();
      const { data: posts } = await useAsyncData('posts', async () => {
        const { data } = await client.from('posts')
          .select('*')
          .order('released', { ascending: true });
        return data;
      });

      this.posts = posts.value as unknown as Post[];
    },

    async fetchLimitedPosts() {
      const client = await useSupabaseClient<Database>();
      const { data: posts } = await useAsyncData('posts', async () => {
        const { data } = await client.from('posts')
          .select('*')
          .order('created_at', { ascending: false })
          .range(this.pagination.firstPostIndex, this.pagination.lastPostIndex);
        return data;
      });

      this.posts = posts.value as unknown as Post[];
    },

    async fetchPostsAmount() {
      const client = await useSupabaseClient<Database>();
      const { data: posts } = await useAsyncData('posts', async () => {
        const { count } = await client.from('posts').select('*', { count: 'estimated', head: true });
        return count;
      });

      this.pagination.postsAmount = posts.value as number;
    },

    async addPost(newPost: NewPost) {
      const client = await useSupabaseClient<Database>();
      try {
        const { data } = await client.from('posts').insert(newPost).select();

        this.posts.push(data![0] as Post);
        notificateUser('Post added succesfully!', 'positive');
      } catch (error) {
        notificateUser('Error adding post, something went wrong', 'negative');
      }
    },

    async removePost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').delete().match({ id });
        this.posts = this.posts.filter((post: Post) => post.id !== id);
        notificateUser('Post deleted successfully!', 'positive');
      } catch (error) {
        notificateUser('Error deleting post', 'negative');
      }
    },

    async releasePost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').update({ released: true, rejected: false }).match({ id });
        const index = this.posts.findIndex((post: Post) => post.id === id);
        this.posts[index].released = true;
        notificateUser('Post released successfully!', 'positive');
      } catch (error) {
        notificateUser('Error', 'negativ');
      }
    },
    async rejectPost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').update({ rejected: true, released: false }).match({ id });
        const index = this.posts.findIndex((post: Post) => post.id === id);
        this.posts[index].rejected = true;
        notificateUser('Post rejected successfully!', 'positive');
      } catch (error) {
        notificateUser('Error', 'negativ');
      }
    },
  },

  getters: {
    getPosts(state) {
      return state.posts;
    },
    getFilter(state) {
      return state.filter;
    },
    getPaginationParameters(state) {
      return state.pagination;
    },

  },
});
