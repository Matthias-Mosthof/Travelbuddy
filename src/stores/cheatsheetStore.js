import { defineStore } from "pinia";

export const useCheatSheetStore = defineStore("sheets", {
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
  },
});
