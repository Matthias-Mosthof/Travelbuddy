import { defineStore } from "pinia";

export const useCheatSheetStore = defineStore("cheatSheet", {
  state: () => ({
    sheet: [],
  }),

  getters: {
    removeLastSheet(state) {
      return state.sheet.pop();
    },
  },

  actions: {
    addSheet(userInput) {
      this.sheet.push(userInput);
    },
  },
});
