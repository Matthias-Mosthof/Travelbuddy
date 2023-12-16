<script setup lang="ts">
defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});

</script>

<template>
  <div class="q-pa-md">
    <q-table
      bordered
      flat
      row-key="name"
      :rows="posts"
    />
  </div>
</template>
