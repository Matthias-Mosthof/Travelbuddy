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
        ref="cheatInput"
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
import { ref } from "vue";

const text = ref();
const state = ref([]);
const cheatInput = ref();

function onSubmit() {
  if (text.value) state.value.push(text.value);
  onReset();
}

function onReset() {
  text.value = null;
  cheatInput.value.focus();
}
</script>
