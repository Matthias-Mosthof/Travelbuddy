import { defineStore } from "pinia";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "src/Api/firebase";
export const useCheatSheetStore = defineStore("cheatSheets", {
  state: () => ({
    sheets: [],
  }),

  actions: {
    addSheet(userInput) {
      userInput.id = this.createID();
      this.sheets.push(userInput);
    },

    setLocalStorage(state) {
      localStorage.setItem("sheets", JSON.stringify(state));
    },

    async fetchFirebaseDB() {
      const data = await getDocs(collection(db, "sheets"));
      data.forEach((doc) => {
        this.sheets.push(doc.data());
      });
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
