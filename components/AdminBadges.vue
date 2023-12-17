<script setup lang="ts">
defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
  releasedPosts: {
    type: Array as () => Post[],
    required: true,
  },
  rejectedPosts: {
    type: Array as () => Post[],
    required: true,
  },
});
</script>

<template>
  <q-badge color="black">
    {{ `${posts.length} Posts ingesesamt` }}<q-icon
      class="q-ml-xs q-px-sm"
      color="white"
      label="test"
      name="check"
    />
  </q-badge>

  <q-badge color="orange-9">
    {{ `${posts.length - releasedPosts.length} Prüfung erforderlich` }}<q-icon
      class="q-ml-xs q-px-sm"
      color="white"
      label="test"
      name="warning"
    />
  </q-badge>

  <q-badge color="green-9">
    {{ `${releasedPosts.length} freigebene Posts` }}<q-icon
      class="q-ml-xs q-px-sm"
      color="white"
      label="test"
      name="check"
    />
  </q-badge>

  <q-badge color="red">
    {{ `${rejectedPosts.length} abgelehnte Posts` }}<q-icon
      class="q-ml-xs q-px-sm"
      color="white"
      label="test"
      name="warning"
    />
  </q-badge>
</template>
