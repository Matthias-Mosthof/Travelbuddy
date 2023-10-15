<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-checkbox
        v-for="item in categories"
        :key="item"
        v-model="selection"
        :label="item"
        :val="item"
        @click="addSelection"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCheatSheetStore } from "src/stores/cheatsheetStore";
const selection = ref([]);
const store = useCheatSheetStore();
const categories = computed(() => store?.getCategories);

function addSelection() {
  store.addSelectedCategorie(selection.value);
}
</script>
