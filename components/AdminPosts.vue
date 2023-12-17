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
    <AdminTables
      :posts="posts"
      :rejected-posts="rejectedPosts"
      :released-posts="releasedPosts"
    />
  </div>
</template>
