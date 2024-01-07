export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    filter: {
      searchTerm: '',
      advancedSearch: {
        isActive: false,
        ageRange: {
          min: 18,
          max: 99,
        } as AgeRange,
        gender: '',
      },
    } as SearchFilter,
    categories: [],
    selectedCategories: [],
    pagination: {
      currentPage: 1,
      postsAmount: 0,
      firstPostIndex: 0,
      lastPostIndex: 9,
    },
    loading: false,
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

    async resetPagination() {
      this.pagination.currentPage = 1;
      this.pagination.firstPostIndex = 0;
      this.pagination.lastPostIndex = 9;
    },

    async fetchLimitedPosts() {
      this.loading = true;
      const client = await useSupabaseClient<Database>();
      const searchTerm = `%${this.filter.searchTerm}%`;
      const { data: posts } = await useAsyncData('posts', async () => {
        const { data, count } = await client.from('posts')
          .select('*', { count: 'estimated', head: false })
          .order('created_at', { ascending: false })
          .or(this.filter.advancedSearch.gender.length > 0
            && this.filter.searchTerm.length < 1
            ? `gender.ilike.%${this.filter.advancedSearch.gender}%`
            : `title.ilike.${searchTerm}, text.ilike.${searchTerm}`)
          .gte('age', this.filter.advancedSearch.ageRange.min)
          .lte('age', this.filter.advancedSearch.ageRange.max)
          .range(this.pagination.firstPostIndex, this.pagination.lastPostIndex);

        return { data, count };
      });
      this.posts = posts.value?.data as unknown as Post[];
      this.pagination.postsAmount = posts.value?.count as number;
      this.loading = false;
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
        notifyUser('Post added succesfully!', 'positive');
      } catch (error) {
        notifyUser('Error adding post, something went wrong', 'negative');
      }
    },

    async removePost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').delete().match({ id });
        this.posts = this.posts.filter((post: Post) => post.id !== id);
        notifyUser('Post deleted successfully!', 'positive');
      } catch (error) {
        notifyUser('Error deleting post', 'negative');
      }
    },

    async releasePost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').update({ released: true, rejected: false }).match({ id });
        const index = this.posts.findIndex((post: Post) => post.id === id);
        this.posts[index].released = true;
        notifyUser('Post released successfully!', 'positive');
      } catch (error) {
        notifyUser('Error', 'negativ');
      }
    },
    async rejectPost(id: number) {
      const client = await useSupabaseClient<Database>();
      try {
        await client.from('posts').update({ rejected: true, released: false }).match({ id });
        const index = this.posts.findIndex((post: Post) => post.id === id);
        this.posts[index].rejected = true;
        notifyUser('Post rejected successfully!', 'positive');
      } catch (error) {
        notifyUser('Error', 'negativ');
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
    getAnyFilterIsActive(state) {
      return state.filter.searchTerm.length > 0
       || state.filter.advancedSearch.isActive
      || state.filter.advancedSearch.gender.length > 0;
    },
    getLoadingState(state) {
      return state.loading;
    },
  },
});
