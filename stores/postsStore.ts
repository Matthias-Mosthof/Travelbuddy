import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { Notify } from 'quasar';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    filter: '',
    categories: [],
    selectedCategories: [],
  }),

  actions: {
    async addPost(newPost: NewPost) {
      try {
        // note to self: addDoc function lets firerbase create an id, with setDoc function one can create own id
        // this.posts.push(newPost);

        const postRef = await addDoc(collection(db, 'posts'), newPost);
        await updateDoc(postRef, {
          createdAt: serverTimestamp(),
        });

        Notify.create({
          message: 'Post added succesfully!',
          type: 'positive',
        });
      } catch (error) {
        Notify.create({
          message: `Error adding post: ${error.message}`,
          type: 'negative',
        });
      }

      this.fetchSupabasePosts();
    },

    async fetchSupabasePosts() {
      const client = useSupabaseClient();
      const { data: posts } = await useAsyncData('posts', async () => {
        const { data } = await client.from('posts').select('*');
        return data;
      });
      console.log(posts);

      // const dbPosts = await getDocs(collection(db, 'posts'));
      // const posts = [] as Post[];

      // dbPosts.forEach((doc) => {
      //   const post = {
      //     id: doc.id,
      //     ...doc.data(),
      //   } as Post;

      //   posts.push(post);
      // });
      // this.posts = posts;
    },

    async removePost(id: string) {

      //   try {
      //     await deleteDoc(doc(postsRef, id));
      //     this.fetchFirebaseDB();
      //     console.log(`successfully deleted document with id ${id}`);
      //   } catch (error) {
      //     console.log(`error: ${error}`);
      //   }
      // },

      // addSelectedCategorie(selection) {
      //   this.selectedCategories = selection;
      // },
      // storeSheetsWithCategories(sheetsWithCategory) {
      //   let categories = [];

    //   sheetsWithCategory.forEach((sheet) => {
    //     if (!categories.includes(sheet.category))
    //       categories.push(sheet.category);
    //   });
    //   const sortedCategories = categories.sort((a, b) => a.localeCompare(b));
    //   this.categories = sortedCategories;
    // },
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
