<template>
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
          :rules="inputRule"
        />
        <q-input
          filled
          v-model="sheetCategory"
          type="text"
          label="Kategorie (optional)"
          ref="newSheet"
        />
        <q-btn color="primary" icon="check" label="Fire" type="submit" />
      </q-form>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
const toggleCard = ref(false);

const store = useCheatSheetStore();

const { addSheet } = store;

const newSheet = ref();
const sheetTitle = ref();
const sheetText = ref();
const sheetCategory = ref();

const inputRule = computed(() => [
  (val) => (val && val.length > 0) || val === null || "Bitte schreibe etwas",
]);

function onSubmit() {
  const newSheet = {};
  if (sheetText.value) newSheet.text = sheetText.value;
  if (sheetTitle.value) newSheet.title = sheetTitle.value;
  newSheet.category = sheetCategory.value || "";
  addSheet(newSheet);
  onReset();
  toggleCard.value = false;
}

function onReset() {
  sheetText.value = null;
  sheetTitle.value = null;
  newSheet.value.focus();
}
</script>
