<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const store = usePostsStore();
const { fetchFirebaseDB } = store;

onMounted(() => {
  fetchFirebaseDB();
});
</script>

<template>
  <AllPosts />
  <AddPost />
</template>
