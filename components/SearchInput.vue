<script setup lang="ts">
const store = usePostsStore();

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-input
    v-model="store.filter.searchTerm"
    debounce="100"
    outlined
    :placeholder="placeholder"
    style="width: 20rem;"
    type="search"
    @update:model-value="store.fetchLimitedPosts"
  >
    <template #append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
