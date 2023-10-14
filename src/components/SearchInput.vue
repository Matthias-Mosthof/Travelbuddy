<script setup>
import { ref } from "vue";
import { useCheatSheetStore } from "src/stores/cheatsheetStore";
const store = useCheatSheetStore();

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
    v-model="store.filter"
    type="search"
    debounce="100"
    :placeholder="placeholder"
    bg-color="info"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>
