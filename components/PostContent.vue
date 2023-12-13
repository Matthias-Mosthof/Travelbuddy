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
    <div class="text-overline text-orange-9">
      {{ `Von ${postName} (${postAge}) ` }}
    </div>
    <div class="text-h5 q-mt-sm q-mb-xs">
      {{ postTitle }}
    </div>
    <div class="text-caption text-grey">
      {{ postText }}
    </div>
  </q-card-section>
</template>
