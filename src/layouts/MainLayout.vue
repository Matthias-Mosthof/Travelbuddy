<template>
  <q-layout>
    <OneSheet />
    <AddSheet />
  </q-layout>
</template>

<script setup>
import { onMounted } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";
import OneSheet from "../components/OneSheet.vue";
import AddSheet from "../components/AddSheet.vue";
const store = useCheatSheetStore();
const { getLocalStorage } = store;

onMounted(() => {
  getLocalStorage();
});
</script>
