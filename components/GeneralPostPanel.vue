<script setup lang="ts">

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const store = usePostsStore();

const posts = computed(() => store.getPosts);

</script>

<template>
  <PublicPostPanel
    v-if="!isAdmin"
    :posts="posts"
  />

  <AdminPostPanel
    v-if="isAdmin"
    :posts="posts"
  />
</template>
