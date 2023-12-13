<script setup lang="ts">
const darkModeStatus = ref(false);

</script>

<template>
  <q-header
    bordered
    elevated
    reveal
  >
    <q-toolbar class="bg-blue-8 text-white">
      <q-btn
        dense
        flat
        icon="assignment_ind"
        round
      />

      <q-toolbar-title> Travelbuddy </q-toolbar-title>
      <SearchInput placeholder="Suche" />
      <q-btn
        class="q-mr-xs"
        dense
        flat
        icon="apps"
        round
      />
      <q-toggle
        v-model="darkModeStatus"
        color="black"
        dark
        icon="nightlight"
        @click="Dark.toggle"
      />
      <q-btn
        dense
        flat
        icon="more_vert"
        round
      />
    </q-toolbar>
  </q-header>

  <q-footer elevated>
    <q-toolbar class="bg-blue-5 text-white">
      <q-btn
        dense
        flat
        icon="assignment_ind"
        round
      />
      <q-toolbar-title> Credentials </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
