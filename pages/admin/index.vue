<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});

const store = usePostsStore();
const { fetchSupabasePosts } = store;

onMounted(() => {
  fetchSupabasePosts();
});

</script>

<template>
  <div>
    <PostsList :is-admin="true" />
    <PostAdd />
  </div>
</template>
