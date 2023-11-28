import { defineStore } from "pinia";
import {
  deleteDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { Notify } from "quasar";

const sheetsRef = collection(db, "sheets");

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [] as Post[],
    filter: "",
    categories: [],
    selectedCategories: [],
  }),

  actions: {
    async addPost(title: string, text: string) {
      try {
        // note to self: addDoc function lets firerbase create an id, with setDoc function one can create own id
        const newPost: NewPost = { title, text };

        // this.posts.push(newPost);

        const sheetRef = await addDoc(collection(db, "sheets"), newPost);
        await updateDoc(sheetRef, {
          createdAt: serverTimestamp(),
        });
        Notify.create({
          message: "Post added succesfully!",
          type: "positive",
        });
      } catch (error) {
        Notify.create({
          message: "Error adding post: " + error.message,
          type: "negative",
        });
      }
      this.fetchFirebaseDB();
    },

    async fetchFirebaseDB() {
      let dbPosts = await getDocs(collection(db, "sheets"));
      const posts = [] as Post[];

      dbPosts.forEach((doc) => {
        let post = {
          id: doc.id,
          ...doc.data(),
        } as Post;

        posts.push(post);
      });
      this.posts = posts;
    },

    async removePost(id: string) {
      try {
        await deleteDoc(doc(postsRef, id));
        this.fetchFirebaseDB();
        console.log("successfully deleted document with id " + id);
      } catch (error) {
        console.log("error: " + error);
      }
    },

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

  getters: {
    getPosts(state) {
      return state.posts;
    },
    getFilter(state) {
      return state.filter;
    },
    // getSheetsWithCategories(state) {
    //   return state.sheets.filter((sheet) => {
    //     if (sheet.category) return sheet.category;
    //   });
    // },
    // getCategories(state) {
    //   const sheetsWithCategory = this.getSheetsWithCategories;
    //   this.storeSheetsWithCategories(sheetsWithCategory);
    //   return state.categories;
    // },
    // getSelectedCategories(state) {
    //   return state.selectedCategories;
    // },
  },
});
