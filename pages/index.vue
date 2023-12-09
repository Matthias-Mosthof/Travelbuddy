<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const store = usePostsStore();
const { fetchSupabasePosts } = store;

onMounted(() => {
  fetchSupabasePosts();
});
</script>

<template>
  <q-page-container>
    <PostsList />
    <PostAdd />
  </q-page-container>
</template>
