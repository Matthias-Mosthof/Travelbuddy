<script setup>
import { ref } from "vue";

const searchTerm = ref("");

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-input
    filled
    v-model="searchTerm"
    type="search"
    debounce="300"
    :placeholder="placeholder"
    bg-color="info"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
