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
    <SearchOverview />
    <q-btn
      icon="explore"
      label="Eigene Anzeige aufgeben"
      outlined
      @click="async() => await navigateTo('post-create')"
    />

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
    <PublicPosts :posts="posts" />
  </div>
</template>

<style scoped lang="scss">
.filter-bar {
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
}
</style>
