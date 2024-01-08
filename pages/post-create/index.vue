<script setup lang="ts">

definePageMeta({
  layout: 'default',
});

const store = usePostsStore();

</script>

<template>
  <q-page-container>
    <PostAdd />
  </q-page-container>
</template>
