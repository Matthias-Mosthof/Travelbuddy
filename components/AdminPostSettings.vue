<script setup lang="ts">
defineProps({
  postId: {
    type: Number,
    default: null,
  },
});

</script>

<template>
  <q-menu
    auto-close
    cover
  >
    <q-list>
      <q-item
        v-close-popup
        clickable
        @click="usePostsStore().removePost(postId)"
      >
        <q-item-section>Remove Card</q-item-section>
      </q-item>
      <q-separator />
      <q-item
        v-close-popup
        clickable
      >
        <q-item-section>Edit Card</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
