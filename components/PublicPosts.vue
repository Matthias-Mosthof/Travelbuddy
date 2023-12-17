<script setup lang="ts">

defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});

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
      <h1
        id="heading"
        key="1"
      >
        Postübersicht
      </h1>
      <SceletonPosts
        v-if="posts.length < 1"
        key="2"
        class="one-post"
      />

      <p
        v-if="posts.length < 1"
        key="3"
      >
        Du siehst keine Daten, weil du kein Zugriff auf die Datenbank hast.
        <!-- Nur im development -->
      </p>

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

        <MessageDialog
          :email="post.email"
          :name="post.name"
        />
      </q-card>
      <PostPagination key="5" />
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

</style>
