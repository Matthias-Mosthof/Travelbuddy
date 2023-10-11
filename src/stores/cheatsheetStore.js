import { defineStore } from "pinia";
import {
  where,
  deleteDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "src/Api/firebase";
import { Notify } from "quasar";

const sheetsRef = collection(db, "sheets");

export const useCheatSheetStore = defineStore("cheatSheets", {
  state: () => ({
    sheets: [],
  }),

  actions: {
    async addSheet(userInput) {
      try {
        // note to self: addDoc function lets firerbase create an id, with setDoc function one can create own id
        const sheetRef = await addDoc(collection(db, "sheets"), userInput);
        await updateDoc(sheetRef, {
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
      let data = await getDocs(collection(db, "sheets"));
      const firebaseSheets = [];
      data.forEach((doc) => {
        let sheet = {
          id: doc.id,
          ...doc.data(),
        };
        firebaseSheets.push(sheet);
      });
      this.sheets = firebaseSheets;
    },

    async removeSheet(id) {
      try {
        await deleteDoc(doc(sheetsRef, id));
        this.fetchFirebaseDB();
        console.log("successfully deleted document with id" + id);
      } catch (error) {
        console.log("error: " + error);
      }
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
