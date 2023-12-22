<script setup lang="ts">

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const store = usePostsStore();

const posts = computed(() => store.getPosts);

const filter = computed(() => store.getFilter);

const filteredPosts = computed((): Post[] => posts.value.filter((post: Post) => (
  post.text?.includes(filter.value.searchTerm) || post.title?.includes(filter.value.searchTerm)
)));

</script>

<template>
  <PublicPostPanel
    v-if="!isAdmin"
    :posts="filteredPosts"
  />

  <AdminPostPanel
    v-if="isAdmin"
    :posts="posts"
  />
</template>
