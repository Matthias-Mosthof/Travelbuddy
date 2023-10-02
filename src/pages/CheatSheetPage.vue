<template>
  <OneSheet />
  <AddSheet />
</template>

<script setup>
import OneSheet from "src/components/OneSheet.vue";
import AddSheet from "src/components/AddSheet.vue";

import { onMounted } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";
const store = useCheatSheetStore();
const { getLocalStorage } = store;

onMounted(() => {
  getLocalStorage();
});
</script>
