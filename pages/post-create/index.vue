<script setup lang="ts">

definePageMeta({
  layout: 'default',
});

const store = usePostsStore();

</script>

<template>
  <div class="container q-mx-auto">
    <h1>Anzeige aufgeben</h1>
    <PostAdd />
  </div>
</template>

<style lang="scss">
.container {
  max-width: 90rem;
}
</style>
