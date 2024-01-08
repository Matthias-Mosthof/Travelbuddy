<script setup lang="ts">
defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});
</script>

<template>
  <TransitionGroup
    appear
    class="column q-gutter-md q-ma-lg items-center"
    tag="div"
  >
    <q-card
      v-for="post in posts"
      :key="post.id"
      bordered
      class="q-pa-md one-post status-released"
      dark
      flat
    >
      <PostContent
        :post-age="post.age"
        :post-name="post.name"
        :post-text="post.text"
        :post-title="post.title"
      />

      <PublicMessageForm
        :email="post.email"
        :name="post.name"
      />
    </q-card>
    <PublicPostPagination key="5" />
  </TransitionGroup>
</template>

<style scoped>

.post-container {
  max-width: 100em;
}
.status-released {
    background: radial-gradient(ellipse at bottom left, #003f15e3 0%, #011300 100%);
}
.one-post {
    width: 50rem;
}

.filter-bar {
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
}
</style>
