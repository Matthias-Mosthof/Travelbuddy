<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-pa-md items-start q-gutter-md">
      <q-card
        v-for="(entry, i) in state"
        :key="i"
        dark
        bordered
        class="text-white my-card"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
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
import { ref } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";
const store = useCheatSheetStore();
const state = ref(store.sheets);
</script>
