<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});

const store = usePostsStore();
const { fetchFirebaseDB } = store;

onMounted(() => {
  fetchFirebaseDB();
});

</script>

<template>
  <div>
    <PostsList :is-admin="true" />
    <PostAdd />
  </div>
</template>
