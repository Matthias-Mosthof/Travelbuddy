<script setup lang="ts">

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const store = usePostsStore();

const state = computed(() => store.getPosts);

const filter = computed(() => store.getFilter);

const filteredPosts = computed((): Post[] => state.value.filter((post: Post) => (
  post.text?.includes(filter.value) || post.title?.includes(filter.value)
)));

const postsAmount = computed(() => store.pagination.postsAmount);
const pageAmount = computed(() => postsAmount.value / 10);

const currentPage = ref(1);

function fetchPostsForCurrentPage() {
  const postsPerPage = 10;
  const startIndex = (currentPage.value - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage - 1;

  store.pagination.firstPostIndex = startIndex;
  store.pagination.lastPostIndex = endIndex;

  store.fetchLimitedPosts();
}

</script>

<template>
  <div class="q-pa-md post-container">
    <TransitionGroup
      appear
      class="row q-gutter-md justify-center"
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      tag="div"
    >
      <q-card
        v-for="post in filteredPosts"
        :key="post.id"
        bordered
        :class="`q-pa-md ${isAdmin && post.released === true ? 'bg-positive' : 'released' &&
          isAdmin && post.rejected === true ? 'bg-negative' : 'released'}`"
        dark
        flat
      >
        <PostContent
          :post-age="post.age"
          :post-name="post.name"
          :post-text="post.text"
          :post-title="post.title"
        />

        <AdminPostSettings
          v-if="isAdmin"
          :post-id="post.id"
        />

        <MessageDialog
          v-if="!isAdmin"
          :email="post.email"
          :name="post.name"
        />
      </q-card>
    </TransitionGroup>

    <q-pagination
      v-model="currentPage"
      boundary-numbers
      direction-links
      :max="pageAmount"
      :max-pages="6"
      @update:model-value="fetchPostsForCurrentPage"
    />
  </div>
</template>

<style scoped>

.post-container {
  max-width: 100em;
}
.released {
  background: radial-gradient(ellipse at bottom left, #003f15e3 0%, #011300 100%);
  width: 50rem;
}
</style>
