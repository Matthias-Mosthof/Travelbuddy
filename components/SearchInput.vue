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
    v-model="store.filter"
    bg-color="info"
    debounce="100"
    filled
    :placeholder="placeholder"
    type="search"
  >
    <template #append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
