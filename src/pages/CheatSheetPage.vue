<template>
  <AllSheets />
  <AddSheet />
</template>

<script setup>
import AllSheets from "src/components/AllSheets.vue";
import AddSheet from "src/components/AddSheet.vue";

import { onMounted } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";
const store = useCheatSheetStore();
const { fetchFirebaseDB } = store;

onMounted(() => {
  fetchFirebaseDB();
});
</script>
