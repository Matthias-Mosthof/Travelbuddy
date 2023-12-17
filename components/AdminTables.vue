<script setup lang="ts">
defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
  releasedPosts: {
    type: Array as () => Post[],
    required: true,
  },
  rejectedPosts: {
    type: Array as () => Post[],
    required: true,
  },
});
</script>

<template>
  <q-table
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat
    :rows="posts"
    :rows-per-page-options="[5, 10,0]"
    title="Alle Posts"
    :wrap-cells="true"
  />

  <q-table
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat

    :rows="releasedPosts"
    :rows-per-page-options="[5, 10,0]"
    title="Freigegebene Posts"
    :wrap-cells="true"
  />

  <q-table
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense

    flat
    :rows="rejectedPosts"
    :rows-per-page-options="[5, 10,0]"
    title="Abgelehnte Posts"
    :wrap-cells="true"
  />
</template>
