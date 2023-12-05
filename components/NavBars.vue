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

      <q-toolbar-title> Cheatsheet App </q-toolbar-title>
      <SearchInput placeholder="Suche" />
      <q-btn
        class="q-mr-xs"
        dense
        flat
        icon="apps"
        round
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
