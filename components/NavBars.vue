<template>
  <q-header reveal elevated bordered>
    <q-toolbar class="bg-blue-8 text-white">
      <q-btn flat round dense icon="assignment_ind" />

      <q-toolbar-title> Cheatsheet App </q-toolbar-title>
      <SearchInput placeholder="Suche" />
      <q-btn flat round dense icon="apps" class="q-mr-xs" />
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>
  </q-header>

  <q-footer elevated>
    <q-toolbar class="bg-blue-5 text-white">
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title> Credentials </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
