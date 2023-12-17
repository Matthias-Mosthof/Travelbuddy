<script setup lang=ts>
const store = usePostsStore();

const postsAmount = computed(() => store.pagination.postsAmount);
const pageAmount = computed(() => postsAmount.value / 10);

const currentPage = ref(1);

const windowHeight = ref(0);

async function fetchPostsForCurrentPage() {
  const el = document.getElementById('heading');
  const postsPerPage = 10;
  windowHeight.value = window.innerHeight;
  const startIndex = (currentPage.value - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage - 1;

  store.pagination.firstPostIndex = startIndex;
  store.pagination.lastPostIndex = endIndex;
  el?.scrollIntoView({ behavior: 'smooth' });
  await store.fetchLimitedPosts();
}

</script>

<template>
  <q-pagination
    v-model="currentPage"
    boundary-numbers
    direction-links
    :ellipses="true"
    :max="pageAmount"
    :max-pages="6"
    @update:model-value="fetchPostsForCurrentPage"
  />
</template>
