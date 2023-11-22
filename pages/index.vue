<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const store = useCheatSheetStore();
const { fetchFirebaseDB } = store;

onMounted(() => {
  fetchFirebaseDB();
});
</script>

<template>
  <CategorieComp />
  <AllSheets />
  <AddSheet />
</template>
