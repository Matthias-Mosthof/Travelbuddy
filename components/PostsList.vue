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
  post.text?.includes(filter.value) || post.title?.includes(filter.value)
)));

</script>

<template>
  <PublicPosts v-if="!isAdmin" />

  <AdminPosts
    v-if="isAdmin"
    :posts="posts"
  />
</template>

<style scoped>

.post-container {
  max-width: 100em;
}
.status-released {
  background: radial-gradient(ellipse at bottom left, #003f15e3 0%, #011300 100%);
}
.one-post {
  width: 50rem;
}
.status-rejected {
  background: red
}

.sceleton {
  width: 50rem;
}
</style>
