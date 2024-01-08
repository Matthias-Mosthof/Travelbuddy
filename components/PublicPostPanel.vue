<script setup lang="ts">

defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});
const store = usePostsStore();
const filterIsActive = computed(() => store.getAnyFilterIsActive);

</script>

<template>
  <div
    class="q-pa-md  justify-content column  items-center"
  >
    <h1
      id="heading"
    >
      Postübersicht
    </h1>

    <SearchOverview class="q-mb-xl" />

    <p v-if="posts.length < 1 && !filterIsActive">
      Du siehst keine Daten, weil du kein Zugriff auf die Datenbank hast.
      <!-- Nur im development -->
    </p>

    <p v-if="posts.length < 1 && filterIsActive">
      Deine Suche ergab leider keine Treffer.
    </p>

    <PublicSceletonPosts
      v-if="posts.length < 1 && !filterIsActive"
      class="one-post"
    />

    <TransitionGroup
      appear
      class="column q-gutter-md q-mx-xl items-center"

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
  </div>
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
