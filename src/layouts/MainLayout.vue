<template>
  <q-layout>
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

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        label="Add new Sheet"
        color="primary"
        @click="toggleCard = true"
      />
    </q-page-sticky>

    <q-dialog v-model="toggleCard" autoclose>
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

const store = useCheatSheetStore();
const state = ref(store.sheets);
const { setLocalStorage, addSheet, getLocalStorage } = store;

const text = ref();
const newSheet = ref();
const toggleCard = ref(false);
const sheetTitle = ref();
const sheetText = ref();

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
