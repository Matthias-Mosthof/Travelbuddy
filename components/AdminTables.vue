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

const selected = ref([] as Post[]);

</script>

<template>
  <q-table
    v-model:selected="selected"
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat
    :loading="posts.length < 1"
    :rows="posts"
    :rows-per-page-options="[5, 10,0]"
    selection="multiple"
    title="Alle Posts"
    :wrap-cells="true"
  />

  <q-table
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat
    :loading="releasedPosts.length < 1"
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
    :loading="rejectedPosts.length < 1"
    :rows="rejectedPosts"
    :rows-per-page-options="[5, 10,0]"
    title="Abgelehnte Posts"
    :wrap-cells="true"
  />

  <AdminActions :selected="selected" />
</template>
