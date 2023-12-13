<script setup lang="ts">
defineProps({
  postName: {
    type: String,
    default: '',
  },
  postAge: {
    type: Number,
    default: null,
  },
  postTitle: {
    type: String,
    default: '',
  },
  postText: {
    type: String,
    default: '',
  },
});

</script>

<template>
  <q-card-section>
    <div class="text-overline text-green-7">
      {{ `Von ${postName} (${postAge}) ` }}
    </div>
    <div class="text-h5 text-bold q-mt-sm q-mb-lg">
      {{ postTitle }}
    </div>
    <div class="text-caption text-white">
      {{ postText }}
    </div>
  </q-card-section>
</template>
