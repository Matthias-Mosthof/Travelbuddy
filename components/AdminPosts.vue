<script setup lang="ts">

const props = defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});

const releasedPosts = computed(() => props.posts.filter((p) => p.released === true));

const rejectedPosts = computed(() => props.posts.filter((p) => p.rejected === true));

</script>

<template>
  <div class="q-px-xl">
    <div class="q-gutter-md q-my-md">
      <AdminBadges
        :posts="posts"
        :rejected-posts="rejectedPosts"
        :released-posts="releasedPosts"
      />
    </div>

    <div class="q-gutter-md" />
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
  </div>
</template>
