<script setup lang="ts">

definePageMeta({
  layout: 'default',
});

const store = usePostsStore();
const { fetchPostsAmount, fetchLimitedPosts } = store;

onMounted(async () => {
  showLoadingSpinner('Posts werden geladen');
  store.loading = true;
  await fetchPostsAmount();
  await fetchLimitedPosts();
  Loading.hide();
  store.loading = false;
});
</script>

<template>
  <q-page-container>
    <GeneralPostPanel />
  </q-page-container>
</template>
