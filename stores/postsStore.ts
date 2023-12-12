export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    filter: '',
    categories: [],
    selectedCategories: [],
  }),

  actions: {

    async fetchSupabasePosts() {
      const client = await useSupabaseClient<Database>();
      const { data: posts } = await useAsyncData('posts', async () => {
        const { data } = await client.from('posts').select('*');
        return data;
      });

      this.posts = posts.value as unknown as Post[];
    },

    async addPost(newPost: NewPost) {
      const client = await useSupabaseClient<Database>();
      try {
        const { data } = await client.from('posts').insert(newPost).select();

        this.posts.push(data![0] as Post);
        notificateUser('Post added succesfully!', 'positive');
      } catch (error) {
        console.log(error);
        notificateUser('Error adding post, something went wrong', 'negative');
      }
    },

    async removePost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').delete().match({ id });
        this.posts = this.posts.filter((post: Post) => post.id !== id);
        console.log(`successfully deleted document with id ${id}`);
        notificateUser('Post deleted successfully!', 'positive');
      } catch (error) {
        console.log(`error: ${error}`);
        notificateUser('Error deleting post', 'negative');
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
  },
});
