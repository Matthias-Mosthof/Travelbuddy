<script setup lang="ts">

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const store = usePostsStore();

const posts = computed(() => store.getPosts);

const filter = computed(() => store.getFilter);

const filteredPosts = computed((): Post[] => posts.value.filter((post: Post) => (
  post.text?.includes(filter.value) || post.title?.includes(filter.value)
)));

</script>

<template>
  <div
    class="q-pa-md"
  >
    <TransitionGroup
      appear
      class="column q-gutter-md q-mx-xl items-center"
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      tag="div"
    >
      <h1 id="heading">
        Postübersicht
      </h1>

      <p v-if="posts.length < 1">
        Du siehst keine Daten, weil du kein Zugriff auf die Datenbank hast.
        <!-- Nur im development -->
      </p>

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
      <PostPagination />
    </TransitionGroup>
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
