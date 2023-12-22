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
  post.text?.toLowerCase().includes(filter.value.searchTerm.toLowerCase())
  && post.title?.toLowerCase().includes(filter.value.searchTerm.toLowerCase())
  && (post.age >= filter.value.ageRange.min && post.age <= filter.value.ageRange.max)
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
