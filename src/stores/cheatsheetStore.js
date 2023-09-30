import { defineStore } from "pinia";

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

    getLocalStorage() {
      let storedsheets = localStorage.getItem("sheets");
      storedsheets = JSON.parse(storedsheets);
      if (storedsheets != undefined) {
        storedsheets.forEach((element) => {
          this.sheets.push(element);
        });
      }
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
