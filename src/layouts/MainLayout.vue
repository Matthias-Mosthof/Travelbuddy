<template>
  <q-layout>
    <OneSheet />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        label="Add new Sheet"
        color="primary"
        @click="toggleCard = true"
      />
    </q-page-sticky>

    <q-dialog v-model="toggleCard">
      <div>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            v-model="sheetTitle"
            bg-color="indigo-2"
            type="text"
            label="Title (optional)"
            filled
          />
          <q-input
            filled
            v-model="sheetText"
            type="textarea"
            label="Deine Beschreibung"
            ref="newSheet"
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                val === null ||
                'Bitte schreibe etwas',
            ]"
          />
          <q-btn color="primary" icon="check" label="Fire" type="submit" />
        </q-form>
      </div>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";

import OneSheet from "../components/OneSheet.vue";
const toggleCard = ref(false);

const store = useCheatSheetStore();
const state = ref(store.sheets);

const { setLocalStorage, addSheet, getLocalStorage } = store;

const text = ref();
const newSheet = ref();

const sheetTitle = ref();
const sheetText = ref();
const sheet = ref({});

function onSubmit() {
  if (sheetText.value) sheet.value.text = sheetText.value;
  if (sheetTitle.value) sheet.value.title = sheetTitle.value;
  addSheet(sheet.value);
  setLocalStorage(state.value);
  onReset();
  toggleCard.value = false;
}

onMounted(() => {
  getLocalStorage();
});

function onReset() {
  text.value = null;
  newSheet.value.focus();
}
</script>
