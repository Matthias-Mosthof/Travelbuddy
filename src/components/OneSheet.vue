<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md">
      <q-card
        v-for="(entry, i) in state"
        :key="i"
        dark
        bordered
        class="text-white my-card"
      >
        <q-card-section>
          <div class="text-h6">
            {{ entry.title }}
          </div>
        </q-card-section>

        <q-card-section>
          {{ entry.text }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";

const store = useCheatSheetStore();

const state = computed(() => {
  return store.getCheatSheets;
});
</script>

<style scoped>
.my-card {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  width: 20rem;
}
</style>
