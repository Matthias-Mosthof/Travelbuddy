<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});

const store = usePostsStore();
const { fetchAllPosts } = store;

onMounted(() => {
  fetchAllPosts();
});

</script>

<template>
  <div>
    <GeneralPostPanel :is-admin="true" />
  </div>
</template>
