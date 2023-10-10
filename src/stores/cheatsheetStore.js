import { defineStore } from "pinia";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "src/Api/firebase";
import { Notify } from "quasar";

export const useCheatSheetStore = defineStore("cheatSheets", {
  state: () => ({
    sheets: [],
  }),

  actions: {
    async addSheet(userInput) {
      try {
        // note to self: addDoc function lets firerbase create an id, with setDoc function one can create own id
        const docRef = await addDoc(collection(db, "sheets"), userInput);
        await updateDoc(docRef, {
          createdAt: serverTimestamp(),
        });
        Notify.create({
          message: "Sheet added succesfully!",
          type: "positive",
        });
      } catch (error) {
        Notify.create({
          message: "Error adding sheet: " + error.message,
          type: "negative",
        });
      }
      this.fetchFirebaseDB();
    },

    async fetchFirebaseDB() {
      const data = await getDocs(collection(db, "sheets"));
      const firebaseSheets = [];
      data.forEach((doc) => {
        firebaseSheets.push(doc.data());
      });
      this.sheets = firebaseSheets;
    },
    createID() {
      return Math.random(1, 10).toFixed(10).toString().replace(/^0\.?/, "");
    },
  },

  getters: {
    getCheatSheets(state) {
      return state.sheets;
    },

    removeLastSheet(state) {
      return state.sheets.pop();
    },
  },
});
