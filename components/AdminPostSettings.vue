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
        <q-item-section>Löschen</q-item-section>
      </q-item>
      <q-separator />
      <q-item
        v-close-popup
        clickable
      >
        <q-item-section>Bearbeiten</q-item-section>
      </q-item>
      <q-separator />

      <q-item
        clickable
        @click="usePostsStore().releasePost(postId)"
      >
        <q-item-section>
          Freigeben
        </q-item-section>
      </q-item>
      <q-item
        clickable
        @click="usePostsStore().rejectPost(postId)"
      >
        <q-item-section>
          Ablehnen
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
