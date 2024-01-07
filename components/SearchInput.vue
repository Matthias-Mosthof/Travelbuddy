<script setup lang="ts">
const store = usePostsStore();

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

async function triggerSearch() {
  await store.resetPagination();
  await store.fetchLimitedPosts();
}
</script>

<template>
  <q-input
    v-model="store.filter.searchTerm"
    debounce="100"
    outlined
    :placeholder="placeholder"
    style="width: 20rem;"
    type="search"
    @update:model-value="triggerSearch"
  >
    <template #append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
