<script setup lang=ts>
const store = usePostsStore();

const paginationParameters = computed(() => store.getPaginationParameters);
const postsAmount = computed(() => paginationParameters.value.postsAmount);

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
  await store.fetchLimitedPosts();
  el?.scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
  <q-pagination
    v-model="store.$state.pagination.currentPage"
    boundary-numbers
    direction-links
    :ellipses="true"
    :max="pageAmount"
    :max-pages="6"
    @update:model-value="fetchPostsForCurrentPage"
  />
</template>
