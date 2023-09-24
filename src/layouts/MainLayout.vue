<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        v-model="text"
        filled
        type="autogrow"
        focused
        label="Your Cheat here"
        autofocus
        ref="newSheet"
        :rules="[
          (val) =>
            (val && val.length > 0) || val === null || 'Bitte schreibe etwas',
        ]"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"> </q-btn>
      </div>
    </q-form>

    <div class="q-pa-md items-start q-gutter-md">
      <q-card v-for="(entry, i) in state" :key="i" class="my-card">
        <q-card-section>
          {{ entry }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";

const store = useCheatSheetStore();
const state = ref(store.sheets);
const { setLocalStorage, addSheet, getLocalStorage } = store;

const text = ref();
const newSheet = ref();

function onSubmit() {
  if (text.value) addSheet(text.value);
  setLocalStorage(state.value);
  onReset();
}

onMounted(() => {
  getLocalStorage();
});

function onReset() {
  text.value = null;
  newSheet.value.focus();
}
</script>
