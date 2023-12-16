<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const store = usePostsStore();
const { fetchPostsAmount, fetchLimitedPosts } = store;

onMounted(async () => {
  await fetchPostsAmount();
  await fetchLimitedPosts();
});
</script>

<template>
  <q-page-container>
    <PostsList />
    <PostAdd />
  </q-page-container>
</template>
