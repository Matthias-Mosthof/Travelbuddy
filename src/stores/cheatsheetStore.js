import { defineStore } from "pinia";

export const useCheatSheetStore = defineStore("cheatSheets", {
  state: () => ({
    sheets: [],
  }),

  getters: {
    removeLastSheet(state) {
      return state.sheets.pop();
    },
  },

  actions: {
    addSheet(userInput) {
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
  },
});
